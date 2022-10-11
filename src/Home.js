import './App.css';
import Seats from './components/Seats';
import {Link} from 'react-router-dom'



function Home() {
  return (
    <div className="App">
    
      <Seats />
      <Link to='/admin'>Hier geht es zur Admin Page</Link>

    </div>
  );
}

export default Home;
