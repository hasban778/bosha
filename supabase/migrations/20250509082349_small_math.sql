/*
  # Add INSERT policy for lightning payments

  1. Changes
    - Add INSERT policy to allow creating new lightning payment records
*/

CREATE POLICY "Anyone can create lightning payments"
  ON lightning_payments
  FOR INSERT
  TO public
  WITH CHECK (true);