import {logo, background} from './assets';
import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Routers} from './components';


function App() {
  const [loader , setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <> 
{loader ? (
        <div className="loader-main">
        
        <div className="loader"></div>        </div>
      ) : (
    <div className="App bg-background sm:px-8 px-4" >
<Navbar />
<Routers/>
    </div>
    )
      }
    </>
  );
}

export default App;
