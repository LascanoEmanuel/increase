
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {
  return (
    
    <div className="App"> 
    <nav className='Navbar'>
    <NavBar />
     </nav>
      <header className="App-header">
       <ItemListContainer greeting="Bienvenidos"/>
      </header>
    </div>
  );
}

export default App;
