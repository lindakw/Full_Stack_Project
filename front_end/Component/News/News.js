import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import styles from "./NewsStyles";
import { AntDesign } from "@expo/vector-icons";

const News = () => {
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
          {/* <TextInput
            placeholder="Search for news"
            style={styles.searchInput}
            onChangeText={setQuery}
            value={query}
          /> */}
          <TextInput
            placeholder="search"
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
          <Text style={styles.textArticle}>1. {articles[0]?.title}</Text>
        </View>
      )}
    </View>
  );
};

export default News;
