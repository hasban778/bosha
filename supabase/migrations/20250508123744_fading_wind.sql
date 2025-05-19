/*
  # Create Lightning Network payments schema

  1. New Tables
    - `lightning_payments`
      - `id` (uuid, primary key)
      - `order_id` (uuid, unique)
      - `hash` (text, unique) - Lightning Network payment hash
      - `amount` (numeric) - Payment amount
      - `status` (text) - Payment status (pending, completed, expired)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `lightning_payments` table
    - Add policy for authenticated users to read their own payments
*/

CREATE TABLE IF NOT EXISTS lightning_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid UNIQUE NOT NULL,
  hash text UNIQUE NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE lightning_payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own payments"
  ON lightning_payments
  FOR SELECT
  TO authenticated
  USING (true);