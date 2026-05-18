export interface EventType {
  id: string;
  venue: string;
  name: string;
  lat: number;
  lng: number;
  date: string | undefined;
  host: string;
  image: string;
  priceMin: number | undefined;
  priceMax: number | undefined;
  genre: string | undefined;
  ticketUrl?: string | undefined;
  child_friendly: boolean;
}

export interface PartnerEvent {
  name: string;
  date: string;
  location: string;
  status: string;
}


export interface CreatedEvent {
  title: string;
  category: string;
  start_date: string;
  start_time?: string;
  end_time: string;
  address: string;
  ticket_url: string;
  source: string;
  price: number;
  child_friendly: boolean;
  status: string;
}