import React from 'react';

function DestinationCard({ name, location, image, description, price }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default DestinationCard;
