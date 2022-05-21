import React, { useCallback, useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";
import {
  CalendarItem,
  listUpcomingEvents,
  loadGoogleApi,
} from "./GoogleCalendar";
import Text from "../Text";
import styled from "styled-components";

interface Props {
  calendarId: string;
  googleApiKey: string;
  limit?: number;
  preview?: boolean;
}

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -8px;
  flex-wrap: wrap;
`;

const Calendar: React.FC<Props> = ({
  calendarId,
  googleApiKey,
  preview = false,
  limit = 6,
}) => {
  const [events, setEvents] = useState<CalendarItem[]>();
  useEffect(() => {
    loadGoogleApi(googleApiKey).then(async () => {
      const calendarEvents = await listUpcomingEvents(calendarId, limit);
      setEvents(calendarEvents.result.items);
    });
  }, [setEvents, calendarId, limit]);

  const renderCalendarEvent = useCallback(
    (event: CalendarItem) => (
      <CalendarEvent
        key={event.start.dateTime}
        event={event}
        preview={preview}
      />
    ),
    [preview]
  );

  if (!events) return <Text>chargement du calendrier...</Text>;

  return <EventsContainer>{events.map(renderCalendarEvent)}</EventsContainer>;
};

export default Calendar;
