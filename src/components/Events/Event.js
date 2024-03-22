// Event.js
import React from 'react';
import './Event.css'; // Import the CSS file
import image01 from "../../image/hero-01.jpeg"
import image02 from "../../image/uk-conference-2024.jpg.webp"
import image03 from "../../image/Journalism awards 2023.jpg.webp"

const Event = () => {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'Are you looking for social work training courses and events? Find out about SLAWS professional',
    },
    {
      id: 2,
      title: 'Event Title',
      image: image02, // Replace with your image path
      description: 'Are you looking for social work training courses and events? Find out about SLAWS professional',
    },
    {
      id: 3,
      title: 'Event Title',
      image: image03, // Replace with your image path
      description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    },
    {
      id: 4,
      title: 'Event Title',
      image: image01, // Replace with your image path
      description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    },
    // {
    //   id: 5,
    //   title: 'Event Title',
    //   image: image01, // Replace with your image path
    //   description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    // },
    // {
    //   id: 6,
    //   title: 'Event Title',
    //   image: image01, // Replace with your image path
    //   description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    // },
    // {
    //   id: 7,
    //   title: 'Event Title',
    //   image: image01, // Replace with your image path
    //   description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    // },
    // {
    //   id: 8,
    //   title: 'Event Title',
    //   image: image01, // Replace with your image path
    //   description: 'Irure amet deserunt aliquip veniam  Lorem cupidatat consequat. Ut aliquip dolor do id quis minim. Aute fugiat aute labore fugiat aute nulla sit. Culpa fugiat',
    // },
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
