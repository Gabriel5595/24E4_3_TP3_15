import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const BookDetailsScreen = ({ route }) => {
  const [details, setDetails] = useState(null);
  const { bookKey } = route.params;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://openlibrary.org${bookKey}.json`);
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, [bookKey]);

  return (
    <View style={styles.container}>
      {details ? (
        <View>
          <Text style={styles.title}>{details.title}</Text>
          <Text>Author: {details.authors?.[0]?.name}</Text>
          <Text>Published: {details.publish_date}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold" },
});
