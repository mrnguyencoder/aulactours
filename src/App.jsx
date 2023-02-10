import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Galerie from "./components/Galerie"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Présentation from "./components/Présentation"


function App() {

  return (
    <div className="">
      <NavBar/>
      <Home/>
      <Présentation/>
      <Galerie/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
