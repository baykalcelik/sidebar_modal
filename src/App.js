
import './App.css';
import Navbar from './Navbar';
import Modal from './Modal';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';

function App() {

  const [goster, setGoster] = useState("");

  const [modalgoster, setModalgoster] = useState(false);

  return (
    <div className="App">
        <Navbar goster={goster} setGoster={setGoster}/>

        <div className='hamburgermenu' onClick={()=>{
            setGoster("goster");
        }}>
          <HiMenu className='animbtn'/>
        </div>

        <button className='showmodal' onClick={()=>{setModalgoster(true);}}>Show Modal</button>
        {modalgoster ? <Modal setModalgoster={setModalgoster}/> : ""}


    </div>
  );
}

export default App;
