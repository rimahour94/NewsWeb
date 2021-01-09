import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import NewsFetch from './News/NewsFetch';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom" 
import AboutUs from './News/AboutUs';

function App() {

 const [right, setright] = useState(false)

  const style={
    right:"78%",
    transition:"all 2s"
  }


  const handleClick=()=>{
    setright(!right)
  }

  return (
    <div >
      <div className="App">
     <h1 >Top 20 News Headlines</h1>
     <div className="burgurMenu" onClick={handleClick}>
       <div className="burger" ></div>
       <div className="burger"></div>
       <div className="burger"></div>
       </div>

       <div className="brgrMenu" style={{right:right?"87%":"100%"}}>
         <ol className="menu">
         
          
           <li>AboutUs</li>
           <li>Log Out</li>
          
          
           </ol>
         </div>

   

       </div>
     <NewsFetch />
  
    </div>
  );
}

export default App;
