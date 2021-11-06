import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "YOUR_API_KEY";
let calendars = [
  {
    calendarId: "visma.com_t0qu80qpt6ci60e4268nsrquag@group.calendar.google.com",
    color: "#007ACA" //optional, specify color of calendar 2 events
  }
];
let styles = {
  today: css`
    color: red;
    border: 1px solid red;
  `,
  tooltip: css`
    color: black;
  `
}
class CalendarDisplay extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
      </div>
    )
  }
}

export default CalendarDisplay;