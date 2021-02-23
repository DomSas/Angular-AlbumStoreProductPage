import { Track } from "./track";

export interface Album {
    name: string;
    releaseDate: String;
    coverImage: string;
    tracks: Track[];
}
