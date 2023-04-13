// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2>{event && event.summary}</h2>
      <p>{event && event.location}</p>
      <p>{event && (new Date(event.created)).toUTCString()}</p>
      {showDetails ?
        <p className="details">{event && event.description}</p> :
        null
      }
      <button className="details-btn" onClick={() => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
      }}>{showDetails ? "hide details" : "show details"}</button>
    </li>
  )
}

export default Event;