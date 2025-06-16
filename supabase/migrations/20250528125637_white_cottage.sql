/*
  # Enable public payments
  
  1. Changes
    - Make user_id column nullable
    - Add policy for public payment creation
    - Add policy for public payment viewing
  
  2. Security
    - Allows anonymous users to create and view payments
    - Maintains existing authenticated user policies
*/

ALTER TABLE payments 
  ALTER COLUMN user_id DROP NOT NULL;

-- Add policy for public payment creation
CREATE POLICY "Anyone can create payments"
  ON payments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Add policy for public payment viewing
CREATE POLICY "Anyone can view payments"
  ON payments
  FOR SELECT
  TO public
  USING (true);