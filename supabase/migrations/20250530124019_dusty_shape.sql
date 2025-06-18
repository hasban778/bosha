/*
  # Enable public payments and customer details
  
  1. Changes
    - Make user_id column nullable in payments
    - Add policies for public payment and customer details creation
    - Add policies for public viewing
  
  2. Security
    - Allows anonymous users to create and view payments and customer details
    - Maintains existing authenticated user policies
*/

-- Modify payments table
ALTER TABLE payments 
  ALTER COLUMN user_id DROP NOT NULL;

-- Add policies for public payment creation and viewing
CREATE POLICY "Anyone can create payments"
  ON payments
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view payments"
  ON payments
  FOR SELECT
  TO public
  USING (true);

-- Add policies for public customer details creation and viewing
CREATE POLICY "Anyone can create customer details"
  ON customer_details
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view customer details"
  ON customer_details
  FOR SELECT
  TO public
  USING (true);