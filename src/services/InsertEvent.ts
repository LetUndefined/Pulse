import { v4 as uuidv4 } from "uuid";
import type { CreatedEvent } from "../types/Interfaces";
import { supabase } from "../lib/Supabase";

export const INSERT_EVENT = async (event: CreatedEvent, imageFile: File | null) => {
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;
  const id = uuidv4();

  let uploadedFilePath: string | null = null;

  if (imageFile) {
    const filePath = `${userId}/${id}.${imageFile.name.split(".").pop()}`;
    const { error: uploadError } = await supabase.storage.from("local_event_images").upload(filePath, imageFile, { upsert: true });
    if (uploadError) throw uploadError;
    uploadedFilePath = filePath;
  }

  const { title, category, start_date, start_time, end_time, source, address, ticket_url, price, child_friendly, status } = event;

  const { error } = await supabase.from("local_events").insert({
    id,
    user_id: userId,
    image_url: uploadedFilePath,
    title,
    category,
    start_date,
    start_time,
    end_time,
    source,
    address,
    ticket_url,
    price,
    child_friendly,
    status,
  });

  if (error) throw error;
  return true;
};
