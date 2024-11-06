export interface Trip {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: Itinerary[];
}

export interface Itinerary {
  day: number;
  location: string;
  description: string;
}
