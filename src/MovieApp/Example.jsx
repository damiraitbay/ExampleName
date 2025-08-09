import React, { useState } from 'react';

function Example() {
  const[page, setPage] = useState('first_page')
  return (
    <div>
      {page=='add' ?  
      <div className="add">
        add
        <button onClick={()=> setPage('first_page')}>Назад</button>
       </div> : 
       page=='list' ?    
       <div className='list'>
        list
        <button onClick={()=> setPage('first_page')}>Назад</button>
       </div> :   
       <div className="first_page">
         <button onClick={()=> setPage('add')}>Добавить фильм</button>
        <button onClick={()=> setPage('list')}>Список фильмов</button>
      </div>
       }
    
    
    </div>
  );
}

export default Example;
