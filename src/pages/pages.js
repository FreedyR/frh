import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Resources from "./resources";
import Navigation from "../components/navigation";
const Pages = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/frh" element={<Home />} />
        <Route path="/rooms" element={<Resources />}></Route>
      </Routes>
    </Router>
  );
};
export default Pages;
