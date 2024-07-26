import React from "react";
import Header from "../components/Header";
import House from "../data/logements.json";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Stars from "../components/Stars";
import Tags from "../components/Tags";
import { useParams, useNavigate } from "react-router-dom";

const Houses = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedHouse = House.find((house) => house.id === id);

  if (!selectedHouse) {
    navigate(`/*`);
    return null;
  }

  let equipements = selectedHouse.equipments.map((equi, index) => (
    <li key={index}>{equi}</li>
  ));

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
            <div className="host-name">{selectedHouse.host.name}</div>
            <div className="host-picture">
              <img src={selectedHouse.host.picture} alt="Host" />
            </div>
            <div className="rating-stars">
              <Stars rating={selectedHouse.rating} />
            </div>
          </div>
        </div>
        <h3>{selectedHouse.location}</h3>
        <Tags tags={selectedHouse.tags} />
        <Collapse
          data={[{ title: "Description", content: selectedHouse.description }]}
        />
        <Collapse data={[{ title: "Equipements", content: equipements }]} />
      </main>
    </>
  );
};

export default Houses;
