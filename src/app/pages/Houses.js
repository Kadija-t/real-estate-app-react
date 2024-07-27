import React, { useEffect } from "react";
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

  useEffect(() => {
    if (!selectedHouse) {
      navigate("/*");
    }
  }, [selectedHouse, navigate]);

  if (!selectedHouse) {
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
          <div className="house-titles">
            <h1 className="house-title">{selectedHouse.title}</h1>
            <h3>{selectedHouse.location}</h3>
          </div>

        </div>
        
        <div className="owner-stars">  <Tags tags={selectedHouse.tags} />
             
         <div className="owner">
            <div className="owner-img-name">
              <div className="host-name">{selectedHouse.host.name}</div>
              <div className="host-picture">
                <img src={selectedHouse.host.picture} alt="Host" />
              </div>
            </div>
          </div>
           
        <div className="rating-stars">
          <Stars rating={selectedHouse.rating} />
        </div></div> 
        <div className="collapses-container">
          <div className="description-collapse">
            <Collapse
              data={[{ title: "Description", content: selectedHouse.description }]}
            />
          </div>
          <div className="equipment-collapse">
            <Collapse data={[{ title: "Équipements", content: equipements }]} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Houses;
