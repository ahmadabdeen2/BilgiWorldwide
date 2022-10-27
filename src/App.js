import {logo, background} from './assets';
import './App.css';

import {Navbar, Routers} from './components';

function App() {
  return (
    <div className="App bg-background sm:px-8 px-4" >
<Navbar />
<Routers/>
    </div>
  );
}

export default App;
