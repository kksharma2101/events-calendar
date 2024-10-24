// components/EventForm.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ".././App.css"

const EventForm = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/get-events"
        );
        console.log(response.data.events);
        setEventData(response.data.events);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [""]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
        {eventData?.map((item) => (
          <ul key={item.id}>
            <div
              className="card border-success mb-3 mt-4"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header bg-transparent border-success">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.date.slice(0, 10)}</p>
              </div>
              <div className="card-body text-success">
                <p className="card-text">{item.discription}</p>
              </div>
              <div className="card-footer bg-transparent border-success d-flex justify-content-around">
                <button className="eventForm-upt-btn">Update</button>
                <button className="eventForm-dlt-btn">Delete</button>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};

export default EventForm;
