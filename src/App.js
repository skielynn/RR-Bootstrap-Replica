import './App.css';
import AppNavbar from './components/Navbar' 
import Background from './components/Background'
import StoreListings from './components/StoreListings'


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
