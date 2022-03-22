import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
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
  const link = "articles[0].url"
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
              size={38}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
             Linking.openURL(link)
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
    justifyContent: "flex-start",
  },
  searchInput: {
   marginTop:75,
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    fontSize:20,
    paddingLeft:25
  },
  searchContainer: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 85,
    marginLeft: 0,
  },
  title: {
    fontFamily: "fantasy",
    fontSize: 30,
    marginTop:75,
    color: "white",
  },
  textArticle: {
    color: "white",
    fontSize: 35,
    fontFamily: "fantasy",
  },
});
