
import './App.css';
import Books from './Components/BooksComponents/Books';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';


function App() {
  return (
    <div className="App">
    <div className='block'>
  <AllCategories/>  
  <Cart/>   
  </div>

  <div className='block'>
   <Books/>   
   </div>

    </div>
  );
}

export default App;
