import React from "react";
import NavigationBar from "./components/navigationBar";
import HeroArea from "./components/heroArea";
import Partners from "./components/partners";
import FormArea from "./components/formArea";
import Solutions from "./components/solutions";
import Details from "./components/details";
import Expertise from "./components/expertise";
import Pricing from "./components/pricing";
import Projects from "./components/projects";
import NewsLetter from "./components/newsLetter";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroArea />
      <Partners />
      <FormArea />
      <Solutions />
      <Details />
      <Expertise />
      <Pricing />
      <Projects />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
