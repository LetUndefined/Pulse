import { supabase } from "../lib/Supabase";

export const PARTNER_SIGN_IN = async (email: string, password: string) => {
  const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  if (signInError) return { success: false, error: signInError.message };

  const { data: profile } = await supabase.from("profiles").select("is_partner").eq("id", data.user.id).single();
  if (!profile?.is_partner) {
    await supabase.auth.signOut();
    return { success: false, error: "This account does not have partner access" };
  }
  return { success: true, error: null };
};
