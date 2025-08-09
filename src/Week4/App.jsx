import React, { useState } from 'react';
function App() {
const[language, setLangugage] =  useState('kz')

  return (
    <div style={{
      color: language=='kz' ? 'blue': language=='ru'? 'red': language=='en' ? 'yellow': 'black'
    }}>
      { language=='kz' ? 'Бұл қазақша текст': language=='ru' ? 'Это русский текст': language=='en' ? 'This is english text' : 'Тілді таңдаңыз'}
    


      <select onChange={(e)=>setLangugage(e.target.value) }>
        <option value="kz">kz</option>
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
      {language}

    </div>
  );
}

export default App;
//null undefined NaN 0 '' false Дұрыс емес шарттар -  falsy мәндер яғни жалған мәндер