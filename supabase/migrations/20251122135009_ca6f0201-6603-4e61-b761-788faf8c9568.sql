-- Remove the trigger from auth schema (Supabase-reserved)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Keep the function but we won't use it with a trigger
-- Instead, we'll call it manually or from client side