import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://divdmfeajnspojhpfgni.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdmRtZmVham5zcG9qaHBmZ25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzODAyMzQsImV4cCI6MjA0ODk1NjIzNH0.9jUwYIaDhdqpE8BBCR9goy5dy1H8Ixy9Mu1veD6PDDc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
