import React, { useContext } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import { DataContex } from './context/store';
import './sass/Header.scss';
import './App.scss'
import Button from './components/Button';


const App = () => {
  
  const {store} = useContext(DataContex)
  return (
    <div className="App">
      <Header/>
        <div className='container'>
          {store.listIds.map(id=> {
            const data = store.lists[id]
            // console.log(datas);
            return <Board key={id} datas={data} />
          })}
          <Button list/>
        </div>
  
    </div>
  );
}

export default App;
