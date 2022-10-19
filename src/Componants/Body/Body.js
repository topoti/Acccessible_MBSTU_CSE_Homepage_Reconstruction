import React from "react";
import MessageAndNotice from "./Sections/MessageAndNotice";
import Statistics from "./Sections/Statistics";
import Publications from "./Sections/Publications";

const Body = () => {
  return (
    <section>
      <MessageAndNotice />
      <Statistics />
      <Publications />
    </section>
  );
};

export default Body;
