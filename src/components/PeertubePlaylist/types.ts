// not exhaustive
export interface Video {
  id: number;
  uuid: string;
  shortUUID: string;
  url: string;
  name: string;
  description: string;
  duration: number;

  thumbnailPath: string;
  previewPath: string;
  embedPath: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PlaylistVideo {
  id: string;
  position: string;
  startTimestamp?: null | number;
  stopTimestamp?: null | number;
  type: number; // probably an enum but do we care?
  video: Video;
}

export interface Playlist {
  total: number;
  data: PlaylistVideo[];
}
