import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({Houses}) => {

  const navigate = useNavigate();

  const handleClick = (houseId) => {
    navigate(`/houses/${houseId}`);
   
  };
  return (
    <>
      <div className="Info">
        {Houses.map((house) => {
          console.log(house.title)
          return (
           <Link to={`/houses/${house.id}`} key={house.id} className="box">
            <div
              className="box-inner"
              key={house.id}
              onClick={() => handleClick(house.id)}
              style={{
                backgroundImage: `url(${house.cover})`,
              }}
            >
              <h3>{house.title}</h3>
            </div>
          </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;
