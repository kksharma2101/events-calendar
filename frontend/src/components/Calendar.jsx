// src/components/Calendar.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ".././App.css"

const Calendar = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const event =  await axios.post("http://localhost:5000/api/event", {title, discription, date})
        if(event) {
            alert("Event create succfully")
        }
    } catch (error) {
        console.log(error, "error in create event")
    }
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="calender-container">
            <h1>Create your Event</h1>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Event Description"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <button type="submit">Create Event</button>
          </div>
        </form>
      </div>
    </>
  );
};

// const Calendar = ({ token }) => {
//   const [events, setEvents] = useState([]);
//   const [eventData, setEventData] = useState({ title: '', description: '', date: '' });
//   const [editingEventId, setEditingEventId] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/get-events", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();
//   }, [token]);

//   const handleChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingEventId) {
//         await axios.put(`/api/events/${editingEventId}`, eventData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       } else {
//         await axios.post('/api/events', eventData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//       }
//       setEventData({ title: '', description: '', date: '' });
//       setEditingEventId(null);
//       // Re-fetch events
//       const response = await axios.get("http://localhost:5000/api/get-events", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEvents(response.data);
//     } catch (error) {
//       console.error('Error saving event:', error);
//     }
//   };

//   const handleEdit = (event) => {
//     setEventData({ title: event.title, description: event.description, date: event.date });
//     setEditingEventId(event.id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/events/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEvents(events.filter((event) => event.id !== id));
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Calendar</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="title" placeholder="Event Title" value={eventData.title} onChange={handleChange} required />
//         <input type="text" name="description" placeholder="Event Description" value={eventData.description} onChange={handleChange} />
//         <input type="datetime-local" name="date" value={eventData.date} onChange={handleChange} required />
//         <button type="submit">{editingEventId ? 'Update Event' : 'Create Event'}</button>
//       </form>
//       <ul>
//         {events.map((event) => (
//           <li key={event.id}>
//             <strong>{event.title}</strong> - {event.description} on {new Date(event.date).toLocaleString()}
//             <button onClick={() => handleEdit(event)}>Edit</button>
//             <button onClick={() => handleDelete(event.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Calendar;
