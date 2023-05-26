import './App.css';
import React, { createContext, useState } from 'react';
//Import Routing Components
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Import our pages
import HomePage from './pages/HomePage';  
import AddTasks from './pages/AddTasks';
import ViewTasks from './pages/ViewTasks';
import UpdateTask from './pages/UpdateTask';
import ViewLowTasks from './pages/ViewLowPriority';
import ViewMediumTasks from './pages/ViewMediumPriority';
import ViewHighTasks from './pages/ViewHighPriority';
import Avatar from './pages/Avatar';
import ReactSwitch from 'react-switch';

// Navigation Bar
import NavigationBar from './components/navigation/NavigationBar';
import NavigationItem from './components/navigation/Sidebar';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (


      <Router>
        <NavigationItem />
    <ThemeContext.Provider value={{theme, toggleTheme}}>


    <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
       <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>

        </div>
        <Routes>     
          <Route index element={<HomePage />} />
          <Route path='view' element={<ViewTasks />} />
          <Route path='add' element={<AddTasks />} />
          <Route path='update' element={<UpdateTask/>} >
            <Route path=':taskId' element={<UpdateTask/>} />
          </Route>
          <Route path='low' element={<ViewLowTasks/>} />
          <Route path='med' element={<ViewMediumTasks/>} />
          <Route path='high' element={<ViewHighTasks/>} />
          <Route path='avatar' element={<Avatar/> } >
              <Route path=':AvatarId' element={<Avatar />} /> 
           </Route>
          
        </Routes>
      <NavigationBar />
    </div>
    </ThemeContext.Provider>
      </Router>
       
  );
}

export default App;
