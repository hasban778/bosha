/*
  # Add INSERT policy for lightning payments

  1. Changes
    - Add INSERT policy to allow authenticated users to create new lightning payment records
    - Enable RLS on lightning_payments table if not already enabled
    - Add proper security checks for authenticated users
*/

-- First ensure RLS is enabled
ALTER TABLE lightning_payments ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Anyone can create lightning payments" ON lightning_payments;

-- Create new policy with proper authentication check
CREATE POLICY "Authenticated users can create lightning payments"
  ON lightning_payments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);