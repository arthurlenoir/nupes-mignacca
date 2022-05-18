import React, { useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";
import {
  CalendarItem,
  listUpcomingEvents,
  loadGoogleApi,
} from "./GoogleCalendar";
import Text from "../Text";

interface Props {
  calendarId: string;
  googleApiKey: string;
}

const renderCalendarEvent = (event: CalendarItem) => (
  <CalendarEvent key={event.start.dateTime} event={event} />
);

const Calendar: React.FC<Props> = ({ calendarId, googleApiKey }) => {
  const [events, setEvents] = useState<CalendarItem[]>();
  useEffect(() => {
    loadGoogleApi(googleApiKey).then(async () => {
      const calendarEvents = await listUpcomingEvents(calendarId);
      setEvents(calendarEvents.result.items);
    });
  }, [setEvents]);

  if (!events) return <Text>chargement du calendrier...</Text>;

  return <>{events.map(renderCalendarEvent)}</>;
};

export default Calendar;
