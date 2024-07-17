import React from "react";
import Header from '../components/Header';
import House from '../data/logements.json';
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import { useParams, useNavigate } from 'react-router-dom';

const Houses = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedHouse = House.find(house => house.id === id);

  if (!selectedHouse) {
    navigate(`/error`);
    return null;
  }

  const createStars = (rating) => {
    const stars = [];
    if (!rating) {
      return stars;
    } else {
      for (let index = 1; index <= 5; index++) {
        if (index <= rating) {
          stars.push(<i key={index} className="fa-solid fa-star"></i>);
        } else {
          stars.push(<i key={index} className="fa-regular fa-star"></i>);
        }
      }
    }
    return stars;
  };

  return (
    <>
      <main>
        <Header />
        <div className="slide-container">
          <Slideshow images={selectedHouse.pictures} />
        </div>
        <div className="title-section">
          <h1 className="house-title">{selectedHouse.title}</h1>
          <div className="owner">
            <div className='host-name'>{selectedHouse.host.name}</div>
            <div className='host-picture'>
              <img src={selectedHouse.host.picture} alt="Host" />
            </div>
            <div className="rating-stars">
              <div className='stars'>{createStars(selectedHouse.rating)}</div>
            </div>
          </div>
        </div>
        <h3>{selectedHouse.location}</h3>
        <div className='tags'>
          {selectedHouse.tags.map((tag, index) => (
            <div key={index} className="tag">{tag}</div>
          ))}
        </div>
        <Collapse data={[{ title: "Description", content: selectedHouse.description }]} />
        <Collapse data={[{ title: "Equipements", content: selectedHouse.equipments }]} />
      </main>
    </>
  );
};

export default Houses;
