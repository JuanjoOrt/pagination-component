import PaginationIO from './PaginationIO'
// import Pagination from './Pagination/Pagination';
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
      {/* <Pagination pageMax={32} page={actualPage} onClick={onClick}/> */}
      <PaginationIO pageMax={99} page={actualPage} onClick={onClick}/>
    </div>
  );
}

export default App;
