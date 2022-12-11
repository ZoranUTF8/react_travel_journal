import React from "react";

const Card = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <div className="card-left">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-right">
        <div className="card-right-location">
          <p className="card-right-location-title">{location}</p>
          <a href={googleMapsUrl} className="card-right-link">
            View on Google maps
          </a>
        </div>
        <div className="card-right-title">{title}</div>
        <div className="card-right-date">
          <p>{startDate} -</p>
          <p> {endDate}</p>
        </div>
        <div className="card-right-description">{description}</div>
      </div>
    </div>
    
  );
};

export default Card;
