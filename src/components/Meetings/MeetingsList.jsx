// // import React, { useState, useEffect } from "react";
// // import AppStoreMeeting from "../../store/AppStoreMeeting";
// // import AppStoreLogin from "../../store/AppStoreLogin";
// // import { observer } from "mobx-react";
// // import AddMeeting from "../Meetings/AddMeeting";


// // const MeetingsList = (observer(() => {

// //   console.log(AppStoreMeeting.meetings);

// //   return (
// //     <div dir='rtl'>
// //       <br />
// //       <h2>פגישות</h2>
// //       {AppStoreMeeting.meetings.length > 0 ? (
// //         <ul>
// //           {AppStoreMeeting.meetings.map((meeting, index) => (
// //             <li key={index}>
// //               <strong>{meeting.clientName}</strong> 
// //               - {meeting.clientPhone}
// //             </li>
// //           )
// //           )
// //           }
// //         </ul>
// //       ) : (
// //         <p>עדין לא הוספת פגישה לרשימה </p>
// //       )}

// //     </div>
// //   );
// // }))

// // export default MeetingsList;

// import React from "react";
// import { observer } from "mobx-react";
// import AppStoreMeeting from "../../store/AppStoreMeeting";

// const MeetingsList = observer(() => {
//   console.log(AppStoreMeeting.meetings);

//   return (
//     <div dir="rtl">
//       <br />
//       <h2>פגישות</h2>
//       {AppStoreMeeting.meetings.length > 0 ? (
//         <ul>
//           {AppStoreMeeting.meetings.map((meeting, index) => (
//             <li key={index}>
//               <strong>{meeting.clientName}</strong> - {meeting.clientPhone}
//               <br />
//               <strong>Email: </strong> {meeting.clientEmail}
//               <br />
//               <strong>תאריך ושעה: </strong> {meeting.dateTime}
//               <br />
//               <strong>שם השירות: </strong> {meeting.serviceName}
//               <br />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>עדיין לא הוספת פגישה לרשימה</p>
//       )}
//     </div>
//   );
// });

// export default MeetingsList;

import React from "react";
import { observer } from "mobx-react";
import AppStoreMeeting from "../../store/AppStoreMeeting";

const MeetingsList = observer(() => {
  console.log(AppStoreMeeting.meetings);

  return (
    <div dir="rtl">
      <br />
      <h2>פגישות</h2>
      {AppStoreMeeting.meetings.length > 0 ? (
        <ul>
          {AppStoreMeeting.meetings.map((meeting, index) => (
            <div
              key={index}
              style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
            >
              <strong>{meeting.clientName}</strong> - {meeting.clientPhone}
              <br />
              <strong>מייל: </strong> {meeting.clientEmail}
              <br />
              <strong>תאריך ושעה: </strong> {meeting.dateTime}
              <br />
              <strong>שם השירות: </strong> {meeting.serviceName}
              <br />
            </div>
          ))}
        </ul>
      ) : (
        <p>עדיין לא הוספת פגישה לרשימה</p>
      )}
    </div>
  );
});

export default MeetingsList;
