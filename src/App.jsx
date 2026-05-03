import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from "./Components/Nav/Nav"
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import CustomCursor from './Components/Cursor/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-charcoal">
      <Router>
        <CustomCursor />
        <Nav/>
        <Routes>
     
          <Route path="/" element={ 
          
          <>
          
          <Home/>
          <Projects/>
          <About/>
          <Contact/>
          </>
      
          }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
