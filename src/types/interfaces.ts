export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  genres: string[];
  summary: string;
  schedule: {
    days: string[];
    time: string;
  };
  episodes: Episode[];
}
