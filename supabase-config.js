
const SUPABASE_URL = "https://ujauunprxlhvtlzudnuu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VeQs7Z9r54lUp78QHOWxkg_7kCAQB7c";

window.sb = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
