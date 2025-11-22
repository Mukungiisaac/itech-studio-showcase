-- Update RLS policy to allow admin email to create their own admin role
DROP POLICY IF EXISTS "Users can insert their own admin role during signup" ON public.user_roles;

CREATE POLICY "Admin can create their own role"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  AND (
    SELECT email FROM auth.users WHERE id = auth.uid()
  ) = 'itechstudios86@gmail.com'
  AND role = 'admin'
);