import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

const InventoryScreen = ({ navigation, route }) => {
  const inventory = route.params.inventory;

  return (
    <View style={styles.container}>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("BookDetails", { bookKey: item.key })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default InventoryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 8, borderBottomWidth: 1 },
});
