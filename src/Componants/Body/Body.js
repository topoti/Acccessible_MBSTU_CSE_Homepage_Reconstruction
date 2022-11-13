import React from "react";
import MessageAndNotice from "./MeassageAndNotice/MessageAndNotice";
import Statistics from "./Stats/Statistics";
import Publications from "./Publication/Publications";
import Quotes from "./Quotes/Quotes";


const Body = () => {
  return (
    <section>
      <MessageAndNotice />
      <Statistics />
      <Publications />
      <Quotes/>
    </section>
  );
};

export default Body;
