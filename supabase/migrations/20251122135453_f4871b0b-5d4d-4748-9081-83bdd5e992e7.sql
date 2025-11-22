-- Remove ALL triggers from auth.users table
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created_assign_admin ON auth.users;

-- Drop the old function if it exists
DROP FUNCTION IF EXISTS public.assign_admin_role() CASCADE;