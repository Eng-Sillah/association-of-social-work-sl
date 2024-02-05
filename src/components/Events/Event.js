// Event.js
import React from 'react';
import './Event.css'; // Import the CSS file
import image01 from "../../image/hero-01.jpeg"

const Event = () => {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 2,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 3,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 4,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 5,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 6,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 7,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    {
      id: 8,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'A little description about event 1.',
    },
    // Add more events as needed
  ];

  return (
    <div className="event-container">
      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <img src={event.image} alt={`Event ${event.id}`} />
          <h2>{event.title}</h2>
          <hr />
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Event;
