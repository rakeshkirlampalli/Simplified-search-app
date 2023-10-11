import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BodyPage from './Components/BodyPage';
import HomePage from './Components/HomePage';
import './App.scss'
 // Assuming ProductList is in the same directory

const App: React.FC = () => {
 
  return (
    <div> 
     <Router>
        <Routes>
        <Route  path="/"  element={<HomePage/>} />
        <Route path="/products" element={<BodyPage/>}  />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;


