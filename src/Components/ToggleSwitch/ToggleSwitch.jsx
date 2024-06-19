import React from 'react'
import './Styles.css';


export const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <div className="wrapper">
        <input
            type="checkbox"
            name="checkbox"
            className="switch"
            checked={isDarkMode}
            onChange={onToggle}
        />
  </div>
  );
};
