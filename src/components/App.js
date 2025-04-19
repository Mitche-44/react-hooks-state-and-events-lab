import React, { useState }   from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Use the state to set the class
  const appClass = isDarkMode ? "App dark" : "App light";

  function handleClick() {
    setIsDarkMode((prevMode) => !prevMode);
  
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
