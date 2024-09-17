import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./scss/App.module.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SkillsListConteiner from "./containers/SkillsListConteiner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.body}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsListConteiner />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
