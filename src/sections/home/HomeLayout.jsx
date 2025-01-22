import React from "react";
import Header from "./components/header/Header";
import Heroes from "./components/principal/Heroes";
import HeroesTwo from "./components/principal/HeroesTwo";
// import HeroesBackground from "./components/principal/HeroesBackground";
import WhoAmI from "./components/sections/WhoAmI";
import PriceComparison from "./components/sections/PriceComparison";
import Testimonials from "./components/sections/Testimonials";
import Teachers from "./components/sections/Teachers";
import Footer from "./components/footer/Footer";
import Methodology from "./components/sections/Methodology";
import MyPurpose from "./components/sections/MyPurpose";
import ContactUs from "./components/sections/ContactUs";

export default function HomeLayout() {
  return (
    <>
      <Header />
      {/* <Heroes /> */}
      <HeroesTwo />
      {/* <HeroesBackground /> */}
      <WhoAmI />
      <PriceComparison />
      <Testimonials />
      <Methodology />
      <MyPurpose />
      <Teachers />
      <ContactUs />
      <Footer />
    </>
  );
}
