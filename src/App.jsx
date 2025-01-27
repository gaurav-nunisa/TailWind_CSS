import { FirstCard } from "./Components/Text";
import { SecondCard } from "./Components/SecondCard";
import { Card } from "./Components/Card";
import { NavBar } from "./Components/NavBar";
import { ImageSection } from "./Components/ImageSection";
import { DesignCards } from "./Components/DesignCards";
import { MiniCard } from "./Components/MiniCards";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-slate-900 min-h-screen ">
        {/* <div className="container mx-auto px-4 space-y-12"> */}
        {/* <FirstCard />
        <SecondCard />
        <Card /> */}
        {/* </div> */}
        <NavBar/>
        <ImageSection/>
        <DesignCards/>
        <MiniCard/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
