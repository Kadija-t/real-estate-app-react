const Banner = ({title, bannerImage}) => {
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
  



