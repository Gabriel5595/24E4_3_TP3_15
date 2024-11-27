import { useState } from "react";
import { Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, } from "react-native";
import { fetchBooks } from "../api/index.jsx";

const SearchScreen = ({ navigation, route }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const searchBooks = async () => {
    setLoading(true);
    const books = await fetchBooks(query);
    setResults(books);
    setLoading(false);
  };


  const addToInventory = (book) => {
    route.params.addBook(book);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a book..."
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={searchBooks}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => addToInventory(item)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16 },
  button: { backgroundColor: "blue", padding: 12, alignItems: "center" },
  buttonText: { color: "white" },
  item: { padding: 8, borderBottomWidth: 1 },
  loader: { marginTop: 20 },
});
