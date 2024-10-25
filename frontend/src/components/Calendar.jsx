import React, { useEffect, useState } from "react";
import axios from "axios";
import ".././App.css";
import Login from "./Login";

const Calendar = () => {
  const [eventData, setEventsData] = useState([]);
  const [events, setEvents] = useState({
    title: "",
    discription: "",
    date: "",
  });

  const [updateEventId, setUpdatedEventId] = useState(null);
  const token = localStorage.getItem("token");

  // useEffect use for retrive content
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}get-events`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEventsData(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [token]);

  // Handel input change data
  const handleChange = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value });
  };

  // Handle create event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update events data
      if (updateEventId) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}update-event/${updateEventId}`,
          events,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        // Create Events
        await axios.post(`${process.env.REACT_APP_API_URL}event`, events, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setEvents({ title: "", discription: "", date: "" });

      setUpdatedEventId(null);

      // Re-fetch events
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}get-events`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEventsData(response.data.events);
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // Handlw update event
  const handleUpdate = (event) => {
    setEvents({
      title: event.title,
      discription: event.discription,
      date: event.date,
    });
    setUpdatedEventId(event.id);
  };

  // Handle delete event
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}delete-event/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEventsData(eventData.filter((event) => event.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <>
      {token ? (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="calender-container">
              <h2>Calendar</h2>
              <div className="input-container">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={events.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="discription"
                  placeholder="Event Discription"
                  value={events.discription}
                  onChange={handleChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={events.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">
                {updateEventId ? "Update Event" : "Create Event"}
              </button>
            </div>
          </form>

          {/* Events list */}
          <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
            {eventData.map((event) => (
              <ul key={event.id}>
                <div
                  className="card border-success mb-3 mt-4"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header bg-transparent border-success">
                    <h3 className="card-title">{event.title}</h3>
                    <p>{event.date.slice(0, 10)}</p>
                  </div>
                  <div className="card-body text-success">
                    <p className="card-text">{event.discription}</p>
                  </div>
                  <div className="card-footer bg-transparent border-success d-flex justify-content-around">
                    <button
                      className="eventForm-upt-btn"
                      onClick={() => handleUpdate(event)}
                    >
                      Update
                    </button>
                    <button
                      className="eventForm-dlt-btn"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Calendar;
