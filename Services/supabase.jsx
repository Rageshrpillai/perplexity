import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE,
  process.env.NEXT_PUBLIC_SUPERBASE_KEY
);
export default supabase;
