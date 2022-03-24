import { View, Text, TextInput , TouchableOpacity} from "react-native";
import React, {useState} from "react";
import axios from "axios";
import styles from "./NewsStyle";
import { AntDesign } from "@expo/vector-icons";
import styles from './NewsStyles'

const News = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  const searchNews = () => {
    (async () => {
      try {
        const newsResponse = await axios.get(
          `http://localhost:3000/api/?q=${searchTerm}`
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
            onChangeText={setSearchTerm}
            value={searchTerm}
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
              color="white"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.textArticle}>1 {articles[0]?.title}</Text>
        </View>
      )}
    </View>
  );
};

export default News;