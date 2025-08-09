import React, { useState } from 'react';

function Currency() {
  const[num, setNum] = useState(0)
const[currency, setCurrency] = useState('')
  return (
    <div>
      <input type="text" onChange={(e)=> setNum(e.target.value)}/>
      <select onChange={(e)=> setCurrency(e.target.value)}>
         <option value="tenge">tenge</option>
        <option value="rubl">rubl</option>
        <option value="dollar">dollar</option>
         <option value="euro">euro</option>
      </select>
      <p> {currency=='tenge' ? num + "tenge" : 
         currency=='rubl'? num/6.7 + 'rubl':
         currency=='dollar'? num/522 +'dollar':
         currency=='euro'? num/610 + 'euro':
         'Валютаны таңдаңыз'} </p>
    </div>
  );
}

export default Currency;
