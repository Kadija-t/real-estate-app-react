import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse"
import bannerImage from "../assets/photo-mountain.avif";
import data from "../data/about.json";

const About = () => {
  return (
    <>
      <main>
        <Header />
        <Banner bannerImage={bannerImage} />
        <Collapse data={data}/>
      </main>
    </>
  );
};

export default About;

