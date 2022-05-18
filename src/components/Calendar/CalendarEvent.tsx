import React from "react";
import styled from "styled-components";
import SubTitle from "../SubTitle";
import Text from "../Text";
import { CalendarItem } from "./GoogleCalendar";

interface Props {
  event: CalendarItem;
}

const EventContainer = styled.div`
  margin: 0 0 32px;
`;

const EventTitle = styled(SubTitle)`
  margin-bottom: 4px;
`;

const DateContainer = styled(Text)`
  font-weight: bold;
  margin-bottom: 2px;
  line-height: 1.2em;
`;

const EventDescription = styled(Text)`
  margin-bottom: 2px;
  line-height: 1.2em;
`;

const EventLocation = styled(Text)`
  margin-bottom: 2px;
  font-style: italic;
  line-height: 1.2em;
`;

const CalendarEvent: React.FC<Props> = ({ event }) => {
  const start = new Date(Date.parse(event.start.dateTime));
  const end = new Date(Date.parse(event.end.dateTime));
  const location = event.location
    ? event.location.replace(/, France$/, "")
    : "";
  return (
    <EventContainer key={event.start.dateTime}>
      <EventTitle>{event.summary}</EventTitle>
      <DateContainer>
        {start.toLocaleDateString()}:{" "}
        {start.toLocaleTimeString(undefined, { timeStyle: "short" })} -{" "}
        {end.toLocaleTimeString(undefined, { timeStyle: "short" })}
      </DateContainer>
      {location && <EventLocation>{location}</EventLocation>}
      {event.description && (
        <EventDescription>{event.description}</EventDescription>
      )}
    </EventContainer>
  );
};

export default CalendarEvent;
