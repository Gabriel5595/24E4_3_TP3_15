import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from "./navigation/StackNavigator.jsx";

export default function App() {
  const [inventory, setInventory] = useState([]);

  const addBook = (book) => {
    setInventory((prev) => [...prev, book]);
  };

  return (
    <NavigationContainer>
      <StackNavigator inventory={inventory} addBook={addBook} />
    </NavigationContainer>
  );
}
