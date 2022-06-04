
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemList from './components/ItemList/ItemList';


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
