-- Add RLS policy to allow users to insert their own admin role during signup
CREATE POLICY "Users can insert their own admin role during signup"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  AND auth.email() = 'itechstudios86@gmail.com'
  AND role = 'admin'
);