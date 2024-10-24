// components/EventForm.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/get-events");
            console.log(response.data.events);
            setEventData(response.data.events);
        } catch (error) {
            console.log(error)
        }
    }
    getData()
  }, ['']);

  return (
    <>
      {/* <div className=""> */}
        {eventData?.map((item) => (
          <ul key={item.id}>
            <li>{item.title} </li>
            <li>{item.discription} </li>
            <li>{item.date} </li>
            {/* <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header bg-transparent border-success">
                {item.title}
              </div>
              <div class="card-body text-success">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">{item.discription}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                {item.date}
              </div>
            </div> */}
          </ul>
        ))}
      {/* </div> */}
    </>
  );
};

export default EventForm;