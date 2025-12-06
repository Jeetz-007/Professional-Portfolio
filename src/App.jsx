import {createBrowserRouter , 
  createRoutesFromElements,
  Route , 
  RouterProvider} from "react-router-dom"

// components
import Layout from "./components/Layout"


//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume";
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import ContactSuccess from "./pages/ContactSuccess"
import NotFound from "./pages/NotFound"

// css
import "./style/Home.css"
import "./style/Resume.css"
import "./style/Layout.css"
import "./style/Contact.css"
import "./style/About.css"
import "./style/Skills.css"
import "./style/SkillsPreview.css"
import "./style/Work.css"
import "./style/ProjectDetail.css"
import "./style/Services.css"
import "./style/Footer.css"
import "./style/NotFound.css"

import "./style/AdaptiveProfileImage.css"

// Code
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="work/:id" element={<ProjectDetail/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="contact/success" element={<ContactSuccess />} />


      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App
