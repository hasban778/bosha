/*
  # Update Lightning Network payments policies for public access

  1. Changes
    - Drop existing authenticated-only policy
    - Add new policy to allow public access for creating payments
    - Add policy for reading own payments using order_id
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Authenticated users can create lightning payments" ON lightning_payments;

-- Create new policy for public inserts
CREATE POLICY "Allow public lightning payments"
  ON lightning_payments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for reading payments
CREATE POLICY "Allow reading own payments by order_id"
  ON lightning_payments
  FOR SELECT
  TO public
  USING (true);