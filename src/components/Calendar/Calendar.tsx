import { SubTitle, Text, Title } from "nupes-ui";
import React, { useEffect, useState } from "react";

const GOOGLE_API_KEY = "AIzaSyBB_V3txxLD4sjtR0xXayV2ZNcqD8Z_NIM";
const CALENDAR_ID = "mldcdlabt7ku11r1jnpq65juos@group.calendar.google.com";

declare global {
  interface Window {
    gapi: {
      load: (resource: string, callback: () => void) => void;
      auth: {
        authorize: (
          data: unknown,
          callback: (authResult: unknown) => void
        ) => void;
      };
      client: {
        setApiKey: (key: string) => void;
        load: (
          resource: string,
          verson: string,
          callback: (res: unknown) => void
        ) => void;
        calendar: {
          events: {
            list: (request: unknown) => Promise<CalendarEvents>;
          };
        };
      };
    };
  }
}

interface CalendarEvents {
  result: CalendarEventsResult;
}

interface CalendarEventsResult {
  items: CalendarItem[];
}

interface CalendarTime {
  dateTime: string;
  timeZone?: string;
}

interface CalendarItem {
  description: string;
  summary: string;
  location: string;
  end: CalendarTime;
  start: CalendarTime;
  status: string;
}
const loadCalendar = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    window.gapi.load("client", () => {
      window.gapi.client.setApiKey(GOOGLE_API_KEY);
      loadCalendarApi(resolve, reject);
    });
  });
};

const loadCalendarApi = (
  resolve: (value: boolean | PromiseLike<boolean>) => void,
  reject: (reason?: any) => void
) => {
  window.gapi.client.load("calendar", "v3", (...args) => {
    resolve(true);
  });
};

function listUpcomingEvents(calendarId: string) {
  return window.gapi.client.calendar.events.list({
    calendarId,
    showDeleted: false,
    singleEvents: true,
    maxResults: 1000,
    orderBy: "startTime",
  });
}

const renderCalendarEvent = (event: CalendarItem) => {
  const start = new Date(Date.parse(event.start.dateTime));
  const end = new Date(Date.parse(event.end.dateTime));
  return (
    <div key={event.start.dateTime}>
      <SubTitle>{event.summary}</SubTitle>
      <Text>{event.description}</Text>
      <Text>{event.location}</Text>
      <Text>
        {start.toLocaleDateString()}:{" "}
        {start.toLocaleTimeString(undefined, { timeStyle: "short" })} -{" "}
        {end.toLocaleTimeString(undefined, { timeStyle: "short" })}
      </Text>
    </div>
  );
};

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarItem[]>();
  useEffect(() => {
    const script = document.createElement("SCRIPT");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");
    script.setAttribute("src", "https://apis.google.com/js/api.js");
    script.addEventListener("load", async () => {
      const success = await loadCalendar();
      if (success) {
        const calendarEvents = await listUpcomingEvents(CALENDAR_ID);
        setEvents(calendarEvents.result.items);
      }
    });
    document.head.appendChild(script);
  }, [setEvents]);

  if (!events) return <div>chargement...</div>;

  return (
    <>
      <Title variant="light-secondary">Nous recontrer</Title>
      {events.map(renderCalendarEvent)}
    </>
  );
};

export default Calendar;
