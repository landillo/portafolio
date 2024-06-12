import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { AboutMePage } from "../Pages/AboutPage/AboutMePage";
import { NavBar } from "../Components/NavBar/NavBar";
import { ProjectsPage } from "../Pages/ProjectsPage/ProjectsPage";
import { ContactPage } from "../Pages/ContactPage/ContactPage";
import { Footer } from "../Components/footer/Footer";

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="about" element={ <AboutMePage /> } />
            <Route path="projects" element={ <ProjectsPage /> } />
            <Route path="Contact" element={ <ContactPage /> } />
        </Routes>
        <Footer/>

    
    </> 
  )
}
