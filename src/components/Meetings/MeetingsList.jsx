// import React from "react";
import { observer } from "mobx-react";
import AppStoreMeeting from "../../store/AppStoreMeeting";
import '../../App.css'
import './Meeting.css'


const MeetingsList = observer(() => {
  const currentDate = new Date(); // Get the current date

  // Create a copy of the meetings array
  const meetings = AppStoreMeeting.meetings.slice();

  // Sort the meetings by date
  const sortedMeetings = meetings.sort((a, b) => {
    const dateA = new Date(a.dateTime);
    const dateB = new Date(b.dateTime);
    return dateB - dateA;
  });

  return (
    <div dir="rtl" >
      <br />
      <h2>פגישות</h2>
      {sortedMeetings.length > 0 ? (
        <ul>
          {sortedMeetings.map((meeting, index) => {
            const meetingDate = new Date(meeting.dateTime.split("T")[0]);

            // Define the CSS class based on the meeting date
            let frameColorClass = "";
            if (meetingDate.toDateString() === currentDate.toDateString()) {
              frameColorClass = "red-frame";
            }

            else if (
              meetingDate > currentDate &&
              meetingDate <= new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000) // Next week
            ) {
              frameColorClass = "orange-frame";
            } else {
              frameColorClass = "green-frame";
            }

            return (
              <div className="meeting-container">
                <div
                  key={index}
                  className={`meeting-frame ${frameColorClass}`}

                // style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
                >
                  <strong>סוג פגישה: </strong> {meeting.serviceName}
                  <br />
                  <strong>שם לקוח: </strong> {meeting.clientName}
                  <br />
                  <strong>פלאפון: </strong> {meeting.clientPhone}
                  <br />
                  <strong>מייל: </strong> {meeting.clientEmail}
                  <br />
                  <strong>תאריך: </strong> {meeting.dateTime.split("T")[0]}
                  <br />
                  <strong>שעה: </strong> {meeting.dateTime.split("T")[1]}
                </div>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>עדין לא הוספת פגישות לרשימה</p>
      )}
    </div>
  );
});

export default MeetingsList;
