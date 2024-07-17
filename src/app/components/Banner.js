const Banner = ({title, bannerImage}) => {
  //state
//get variable banner image from css banner prop 

 //comportement

    return (
      <>
      <div className="banner">
        <img className="bg-img" src={bannerImage} alt="{title}"/>
        <h1 className='banner-title'>{title}</h1>
      </div>
     </>
    );
  };
  
  export default Banner;
  



