import React, { useEffect, useState } from 'react';

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await fetch('https://api.example.com/meetings');
      const data = await response.json();
      const sortedMeetings = data.meetings.sort((a, b) => new Date(a.date) - new Date(b.date));
      setMeetings(sortedMeetings);
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  return (
    <div>
      <h1>Meeting List</h1>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <h3>{meeting.title}</h3>
            <p>Date: {meeting.date}</p>
            <p>Location: {meeting.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
