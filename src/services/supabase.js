import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wfzfbygjzibvmalcpmqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmemZieWdqemlidm1hbGNwbXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDA0NzQsImV4cCI6MjA4NzI3NjQ3NH0.RcX0NhvCCfwPUD7WRB1tQAGnlkMpxEd09ZAfNcLocrw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
