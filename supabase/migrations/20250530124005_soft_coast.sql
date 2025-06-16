/*
  # Payment System Schema with Customer Details

  1. New Tables
    - `customer_details`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `address` (text)
      - `city` (text)
      - `postal_code` (text)
      - `country` (text)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

    - `payments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `customer_details_id` (uuid, references customer_details)
      - `amount` (numeric, payment amount in USD)
      - `sats_amount` (bigint, payment amount in satoshis)
      - `invoice` (text, lightning/bitcoin invoice)
      - `payment_type` (text, either 'lightning' or 'onchain')
      - `status` (text, payment status)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
    - Add policy for inserting new records
*/

-- Create customer_details table
CREATE TABLE IF NOT EXISTS customer_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  postal_code text NOT NULL,
  country text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create payments table with customer_details reference
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  customer_details_id uuid REFERENCES customer_details(id) NOT NULL,
  amount numeric(10,2) NOT NULL,
  sats_amount bigint NOT NULL,
  invoice text NOT NULL,
  payment_type text NOT NULL CHECK (payment_type IN ('lightning', 'onchain')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE customer_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Create policies for customer_details
CREATE POLICY "Users can view their own customer details"
  ON customer_details
  FOR SELECT
  TO authenticated
  USING (id IN (
    SELECT customer_details_id 
    FROM payments 
    WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can create customer details"
  ON customer_details
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policies for payments
CREATE POLICY "Users can view their own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create payments"
  ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for both tables
CREATE TRIGGER update_customer_details_updated_at
  BEFORE UPDATE ON customer_details
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
  BEFORE UPDATE ON payments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();