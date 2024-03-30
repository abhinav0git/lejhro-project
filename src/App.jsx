import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import './App.css';
import thelogo from './assets/lejhro_logo_white.png'
import Body from "./Components/Body";
import TopHeader from "./Components/TopHeader";

export const App = () => {
  return (
    <div>
      <Navbar />
      <TopHeader />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a className="navbar-brand" href="/" aria-label="HomePage" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <img src={thelogo} alt="Lejhro White Logo" />
          <h2 className="mt-4" style={{ textAlign: "center", transition: "all 1s ease" }}>Blogs</h2>
        </a>
      </div>
      <Body />
      <Footer />
    </div>
  )
}

export default App