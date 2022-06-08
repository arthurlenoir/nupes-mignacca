import { SubTitle, Text } from "nupes-ui";
import React, { useCallback, useEffect, useState } from "react";
import Video from "../Video";
import { Playlist, PlaylistVideo } from "./types";
import styles from "./PeertubePlaylist.module.css";

interface Props {
  peertubeHost: string;
  playlistId: string;
}

const PeertubePlaylist: React.FC<Props> = ({ peertubeHost, playlistId }) => {
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    fetch(`https://${peertubeHost}/api/v1/video-playlists/${playlistId}/videos`)
      .then((response) => response.json())
      .then(setPlaylist);
  }, [peertubeHost, playlistId]);

  const renderPlaylistVideo = useCallback(
    (playlistVideo: PlaylistVideo) => (
      <div key={playlistVideo.id} className={styles.VideoContainer}>
        <SubTitle>{playlistVideo.video.name}</SubTitle>
        <Video
          src={`https://${peertubeHost}${playlistVideo.video.embedPath}`}
        />
      </div>
    ),
    [peertubeHost]
  );

  if (!playlist) return <Text>chargement en cours…</Text>;

  return (
    <div className={styles.VideosContainer}>
      {playlist.data.map(renderPlaylistVideo)}
    </div>
  );
};

export default PeertubePlaylist;
