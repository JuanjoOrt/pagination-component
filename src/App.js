import Pagination from './Pagination/Pagination'
import './App.css';
import { useState } from 'react';

function App() {
  const [actualPage, setActualPage] = useState(1)  

  const onClick = (page) =>{
    setActualPage(page)
  }

  return (
    <div className="App">

      <div style={{marginTop: '5rem', marginBottom: '1rem'}}>
        <span>Pagina elegida: {actualPage}</span>
      </div>
      <Pagination pageMin={1} pageMax={10} page={actualPage} onClick={onClick}/>
    </div>
  );
}

export default App;
