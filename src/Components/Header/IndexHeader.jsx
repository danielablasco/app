import React from 'react'

export const Header = () => {
  return (
   <header>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
       </ul>
    <div className='cart'>
      <box-icon name="cart"></box-icon>
    <span className="item_total">0</span>
    </div>
    </header>
  );
};

export default Header