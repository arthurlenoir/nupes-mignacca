import { SubTitle, Text } from "nupes-ui";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Video from "../Video";
import { Playlist, PlaylistVideo } from "./types";

interface Props {
  peertubeHost: string;
  playlistId: string;
}

const VideoContainer = styled.div`
  margin: 0 0 32px;
`;

const PeertubePlaylist: React.FC<Props> = ({ peertubeHost, playlistId }) => {
  const [playlist, setPlaylist] = useState<Playlist>();

  useEffect(() => {
    fetch(`https://${peertubeHost}/api/v1/video-playlists/${playlistId}/videos`)
      .then((response) => response.json())
      .then(setPlaylist);
  }, [peertubeHost, playlistId]);

  const renderPlaylistVideo = useCallback(
    (playlistVideo: PlaylistVideo) => (
      <VideoContainer key={playlistVideo.id}>
        <SubTitle>{playlistVideo.video.name}</SubTitle>
        <Video
          src={`https://${peertubeHost}${playlistVideo.video.embedPath}`}
        />
      </VideoContainer>
    ),
    [peertubeHost]
  );

  if (!playlist) return <Text>chargement en cours…</Text>;

  return <>{playlist.data.map(renderPlaylistVideo)}</>;
};

export default PeertubePlaylist;
