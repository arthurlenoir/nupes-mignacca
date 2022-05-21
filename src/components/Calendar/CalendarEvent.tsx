import { Highlight } from "nupes-ui";
import React from "react";
import styled, { css } from "styled-components";
import SubTitle from "../SubTitle";
import Text from "../Text";
import { CalendarItem } from "./GoogleCalendar";

interface Props {
  event: CalendarItem;
  preview?: boolean;
}

interface ContainerProps {
  preview?: boolean;
}

const EventContainer = styled.div<ContainerProps>`
  margin: 0 8px 16px;
  border: 1px solid #eeeeee;
  padding: 16px 12px;
  min-width: 300px;
  flex: 1 1 100%;
  ${({ preview }) =>
    preview &&
    css`
      flex: 1 1 40%;
    `}
`;

const EventSummary = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
  white-space: nowrap;
`;

const SmallHighlight = styled(Highlight)`
  ::before {
    left: 0;
    right: 0;
  }
`;

const EventTitle = styled(SubTitle)`
  flex: 1;
  white-space: normal;
  font-family: "Acumin Pro Condensed Black";
  margin: 0;
  text-align: right;
`;

const DateContainer = styled(Text)`
  margin: 4px 8px 0 0;
  line-height: 1.2em;
`;

const TimeContainer = styled(Text)`
  margin: 5px 8px 0 0;
  font-family: "Acumin Pro Condensed Black";
`;

const EventLocation = styled(Text)`
  margin-bottom: 2px;
  font-style: italic;
  line-height: 1.2em;
`;

const EventDescription = styled(Text)`
  margin: 16px 0 2px;
  line-height: 1.2em;
`;

const htmlDecode = (htmlText: string) => {
  const e = document.createElement("div");
  e.innerHTML = htmlText;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const CalendarEvent: React.FC<Props> = ({ event, preview = false }) => {
  const start = new Date(Date.parse(event.start.dateTime));
  const end = new Date(Date.parse(event.end.dateTime));
  const location = event.location
    ? event.location.replace(/, France$/, "")
    : "";
  return (
    <EventContainer key={event.start.dateTime} preview={preview}>
      <EventSummary>
        <DateContainer>
          <SmallHighlight>
            {start.toLocaleDateString(undefined, {
              day: "2-digit",
              month: "long",
            })}
          </SmallHighlight>
        </DateContainer>
        <TimeContainer>
          {start.toLocaleTimeString(undefined, { timeStyle: "short" })} -{" "}
          {end.toLocaleTimeString(undefined, { timeStyle: "short" })}
        </TimeContainer>
        <EventTitle>{event.summary}</EventTitle>
      </EventSummary>
      {location && <EventLocation>{location}</EventLocation>}
      {!preview && event.description && (
        <EventDescription>
          <div
            dangerouslySetInnerHTML={{ __html: htmlDecode(event.description) }}
          />
        </EventDescription>
      )}
    </EventContainer>
  );
};

export default CalendarEvent;
