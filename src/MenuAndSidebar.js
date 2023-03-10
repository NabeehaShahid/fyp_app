import React from 'react';

const MenuAndSidebar = () => {
  return (
    <div className="container">
      <div className="menu-bar">
        <input type="text" placeholder="Search..." />
        <button className="rounded-button">Button 1</button>
        <button className="rounded-button">Button 2</button>
      </div>
      <div className="side-bar">
        {/* Add sidebar content here */}
      </div>
    </div>
  );
}

export default MenuAndSidebar;
