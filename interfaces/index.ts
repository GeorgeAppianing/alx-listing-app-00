// interfaces/index.ts
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[]; // tags like ["Beachfront","Private Pool"]
  price: number;
  offers: Offers;
  image: string;
  discount: string; // empty string if none, otherwise percent as string e.g. "20"
}
