
import './App.css';
import Headers from './Components/Headers';
import Footer from './Components/Footer';
import Restaurantli from './Components/Restaurantli';
import Viewrestaurant from './Components/Viewrestaurant';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Headers/>
        <Routes>
      <Route path='/' element={<Restaurantli/>}/>
    <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
    </Routes>
       <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
