import React, { useState } from 'react';

function Ternary() {
  const isLoggedIn = true
  const[isDark, setisDark] = useState(false)

  function change(){
    setisDark(!isDark)
  }
  return (
    <div style={{
      backgroundColor: isDark ? 'black' :'white', 
      color: isDark ?'white' : 'black'
    }}>
      {isLoggedIn && <p>Сіз кірдіңіз - And операторы</p>} 
      {isDark ? 'Қараңғы режим қосулы' : !isDark ? 'Жарық режим қосулы': 'Ешқандай режим қосылмады'} - Тернарлы операторлар

      <button onClick={change}>{isDark ?'Қараңғы режим' : 'Жарық режим'}</button>
    </div>
  );
}

export default Ternary;
