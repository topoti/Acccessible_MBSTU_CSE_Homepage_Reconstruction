import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Componants/Header/Header.css";
import "./Componants/Body/MeassageAndNotice/MessageAndNotice.css";
import "./Componants/Body/Stats/Statistics.css";
import "./Componants/Body/Publication/Publication.css";
import "./Componants/Shared/SectionTitle/SectionTitle.css";
import "./Componants/Body/Quotes/Quotes.css";
import "./Componants/Body/Projects/Projects.css";
import "./Componants/Shared/Cards/Cards.css";
import "./Componants/Body/FamousPersons/FamousPersons.css";
import "./Componants/Footer/footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
