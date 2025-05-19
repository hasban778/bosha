/*
  # Add customer information to lightning payments

  1. Changes
    - Add customer information columns to lightning_payments table
    - Add validation for email format
*/

ALTER TABLE lightning_payments 
ADD COLUMN IF NOT EXISTS customer_email text,
ADD COLUMN IF NOT EXISTS customer_first_name text,
ADD COLUMN IF NOT EXISTS customer_last_name text,
ADD COLUMN IF NOT EXISTS customer_address text,
ADD COLUMN IF NOT EXISTS customer_city text,
ADD COLUMN IF NOT EXISTS customer_state text,
ADD COLUMN IF NOT EXISTS customer_zip text,
ADD COLUMN IF NOT EXISTS customer_country text,
ADD COLUMN IF NOT EXISTS customer_phone text;

-- Add email format validation
ALTER TABLE lightning_payments 
ADD CONSTRAINT customer_email_format 
CHECK (customer_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');