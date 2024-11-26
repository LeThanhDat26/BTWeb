import React,{useState} from 'react';

const WelcomeMessage=()=>{
  const [name,setName]=useState('');
  const [message,setMessage]=useState('');

  const handleInputChange=(e)=>{
    setName(e.target.value);
  };
  const handleButtonClick=()=>{
    setMessage(`xin chao, ${name}!`);
  };
    return(
      <div style={{padding:'20px'}}>
        <h1>Chao mung ung dung react!</h1>
        <input
        type='text'
        placeholder='Nhap ten cua ban'
        value={name}
        onChange={handleInputChange}>
        </input>
        <button onClick={handleButtonClick}>Chao mung</button>
        {message&&<p>{message}</p>}
        </div>
    );
};
export default WelcomeMessage;