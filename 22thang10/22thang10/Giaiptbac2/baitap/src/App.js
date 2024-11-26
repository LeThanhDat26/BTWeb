import React,{useState} from 'react';
const QuadraticSolver=()=>{
  const [a,setA]=useState(0);
  const [b,setB]=useState(0);
  const [c,setC]=useState(0);
  const [result,setResult]=useState('');

  const handleInputChange=(e,setter)=>{
    setter(Number(e.target.value));
  };
  const solveEquation=()=>{
    const delta=b*b-4*a*c;
    if (delta<0){
      setResult('phuong trinh vo nghiem');
    } else  if (delta===0) {
      const x=-b/(2*a);
      setResult(`phuong trinh co nghiem kep x=${x}`);
    }else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setResult(`phuong trinh co nghiem phan biet: x1= ${x1}, x2= ${x2}`);
    }
  };
  return(
  <div style={{padding:'20px',maxWidth:'400px',margin:'auto'}}>
      <h1>Giai pt bac 2</h1>
      <div>
        <label>nhap he so a: </label>
        <input
        type='number'
        value={a}
        onChange={(e)=>handleInputChange(e,setA)}
        placeholder='he so a'></input>
      </div>
      <div>
        <label>nhap he so b: </label>
        <input
        type="number"
        value={b}
        onChange={(e) => handleInputChange(e, setB)}
        placeholder="he so b"></input>
      </div>
      <div>
      <label>nhap he so c: </label>
       <input
       type="number"
       value={c}
      onChange={(e) => handleInputChange(e, setC)}
      placeholder="Hệ số c"></input>
      </div>
      <button onClick={solveEquation}>giai phuong trinh</button>
      {result&&<p>ketqua:{result}</p>}
      </div>
 );
};
export default QuadraticSolver;
  
