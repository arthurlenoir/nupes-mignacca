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

export interface CalendarTime {
  dateTime: string;
  timeZone?: string;
}

export interface CalendarItem {
  description: string;
  summary: string;
  location: string;
  end: CalendarTime;
  start: CalendarTime;
  status: string;
}
const loadCalendar = (googleApiKey: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    window.gapi.load("client", () => {
      window.gapi.client.setApiKey(googleApiKey);
      loadCalendarApi(resolve, reject);
    });
  });
};

const loadCalendarApi = (
  resolve: (value: boolean | PromiseLike<boolean>) => void,
  reject: (reason?: any) => void
) => {
  window.gapi.client.load("calendar", "v3", () => {
    resolve(true);
  });
};

export const listUpcomingEvents = (calendarId: string) => {
  return window.gapi.client.calendar.events.list({
    calendarId,
    showDeleted: false,
    singleEvents: true,
    maxResults: 6,
    orderBy: "startTime",
  });
};

export const loadGoogleApi = (googleApiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("SCRIPT");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");
    script.setAttribute("src", "https://apis.google.com/js/api.js");
    script.addEventListener("load", async () => {
      const success = await loadCalendar(googleApiKey);
      if (success) {
        resolve();
      } else {
        reject("unable to load calendar");
      }
    });
    document.head.appendChild(script);
  });
};
