  import { createClient } from '@supabase/supabase-js'
  
  const supabase_url= process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabase_key= process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
  const supabase = createClient(supabase_url, supabase_key)

  export default supabase