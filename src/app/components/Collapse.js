import React, { useState } from 'react';

const Collapse = ({ data  }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, index) => (
          <div className='item' key={index}>
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.title}</h2>
              <i className={`fa-solid ${selected === index ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
            </div>
            <div className={selected === index ? "content show" : "content"}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collapse;