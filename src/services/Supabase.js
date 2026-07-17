import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nadgdxehkoxndyejxxml.supabase.co";
const supabaseKey = "sb_publishable_OPMg6gz29v5xDInZD9zHfQ_6B5sCEtk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
