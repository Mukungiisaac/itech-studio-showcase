-- Add RLS policy for user_roles table to allow the has_role function to work
CREATE POLICY "Allow service role to read user_roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (true);