import Gallery from "./components/gallery/Gallery";
import { GlobalStyle } from "./components/style/container";
import { getImages } from "./store/getDataSlice";
import { Route, Routes } from "react-router-dom";
import IndividualCard from "./components/gallery/individual-card/IndividualCard";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/pic/:picId" element={<IndividualCard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
