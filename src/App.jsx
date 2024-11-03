import Banner from "./Components/Banner/Banner";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import OurServices from "./Components/OurServices/OurServices";
import TopList from "./Components/Top List/TopList";
import bgImage from "./assets/2.png";

const App = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  );
};

export default App;
