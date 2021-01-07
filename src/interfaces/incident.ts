export interface IntIncident {
  id?: string;
  title?: string;
  description?: string;
  address?: string;
  occurred_at?: string;
  updated_at?: string;
  url?: string;
  source?: string;
  media?: IntMedia;
  type?: string;
}

export interface IntMedia {
  image_url: string;
  image_url_thumb: string;
}
