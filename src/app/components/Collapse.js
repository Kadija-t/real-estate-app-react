import React, { useState } from 'react';

const Collapse = ({ data }) => {
  const [openSections, setOpenSections] = useState({});

  const toggle = (index) => {
    setOpenSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, index) => (
          <div className='item' key={index}>
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.title}</h2>
              <i className={`fa-solid ${openSections[index] ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
            </div>
            <div className={openSections[index] ? "content show" : "content"}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collapse;