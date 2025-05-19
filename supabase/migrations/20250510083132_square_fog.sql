/*
  # Create Bitcoin payments schema

  1. New Tables
    - `bitcoin_payments`
      - `id` (uuid, primary key)
      - `order_id` (uuid, unique)
      - `hash` (text, unique) - Bitcoin transaction hash
      - `amount` (numeric) - Payment amount
      - `status` (text) - Payment status (pending, completed, expired)
      - `customer_email` (text) - Customer email with format validation
      - `customer_first_name` (text) - Customer first name
      - `customer_last_name` (text) - Customer last name
      - `customer_address` (text) - Customer shipping address
      - `customer_city` (text) - Customer city
      - `customer_state` (text) - Customer state/province
      - `customer_zip` (text) - Customer postal code
      - `customer_country` (text) - Customer country
      - `customer_phone` (text) - Customer phone number (optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `bitcoin_payments` table
    - Add policies for public access to create and read payments
*/

CREATE TABLE IF NOT EXISTS bitcoin_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid UNIQUE NOT NULL,
  hash text UNIQUE NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  customer_email text,
  customer_first_name text,
  customer_last_name text,
  customer_address text,
  customer_city text,
  customer_state text,
  customer_zip text,
  customer_country text,
  customer_phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add email format validation
ALTER TABLE bitcoin_payments 
ADD CONSTRAINT customer_email_format 
CHECK (customer_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Enable RLS
ALTER TABLE bitcoin_payments ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts
CREATE POLICY "Allow public bitcoin payments"
  ON bitcoin_payments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for reading payments
CREATE POLICY "Allow reading own bitcoin payments"
  ON bitcoin_payments
  FOR SELECT
  TO public
  USING (true);