import Canvas from './Canvas';
import Header from './Header';
import Output from './Output';
import React, { useState } from 'react';

export default function Home(){

    const [oph,setOph] = useState([]); //sets output HTML for the button
    const [opc,setOpc] = useState([]); //sets output CSS for the button
  
    const handleUpdate = (choice, x) => {
      if(choice === 1){
        setOpc(x);
      }
      else{
        setOph(x);
      }
    }
    
    return <div className='Home'><Header/>
    <div className='MainBody'>
      <Canvas onChange={handleUpdate}></Canvas>
      <Output css={opc} html={oph}></Output>
    </div>
    </div>
}