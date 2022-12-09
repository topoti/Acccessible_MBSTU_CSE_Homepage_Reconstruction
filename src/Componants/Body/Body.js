import React from "react";
import MessageAndNotice from "./MeassageAndNotice/MessageAndNotice";
import Statistics from "./Stats/Statistics";
import Publications from "./Publication/Publications";
import Quotes from "./Quotes/Quotes";
import Projects from "./Projects/Projects";
import TechNews from "./TechNews/TechNews";
import FamousPersons from "./FamousPersons/FamousPersons";

const Body = () => {
  return (
    <section>
      <MessageAndNotice />
      <Statistics />
      <Publications />
      <Quotes />
      <Projects />
      <TechNews />
      <FamousPersons/>
    </section>
  );
};

export default Body;
