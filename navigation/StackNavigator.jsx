import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../components/searchScreen/index.jsx";
import InventoryScreen from "../components/inventoryScreen/index.jsx";
import BookDetailsScreen from "../components/bookDetailsScreen/index.jsx";

const Stack = createStackNavigator();

const StackNavigator = ({ inventory, addBook }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        initialParams={{ addBook }}
      />
      <Stack.Screen
        name="Inventory"
        component={InventoryScreen}
        initialParams={{ inventory }}
      />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
