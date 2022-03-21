import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isSearching, setIsSearching] = useState(true);
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const searchNews = () => {
    (async () => {
      try {
        const newsResponse = await axios.get(
          `http://localhost:3000/api/?q=${query}`
        );
        setArticles(newsResponse.data);
        console.log("This is our data ===>", newsResponse.data);
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We got the news!</Text>
      {isSearching ? (
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for news"
            style={styles.searchInput}
            onChangeText={setQuery}
            value={query}
          />
          <TouchableOpacity
            onPress={() => {
              searchNews(), setIsSearching(!isSearching);
            }}
          >
            <AntDesign
              style={styles.icon}
              name="search1"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              articles[0]?.url;
            }}
          >
            <Text style={styles.textArticle}>1. {articles[0]?.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9967A",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    marginTop: 25,
    height: 30,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 25,
    marginLeft: 20,
  },
  title: {
    fontFamily: "fantasy",
    fontSize: 30,
    fontWeight: 800,
    color: "white",
  },
  textArticle: {
    color: "white",
    fontSize: 15,
    fontFamily: "fantasy",
  },
});
