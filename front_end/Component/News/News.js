import { View, Text, TextInput , TouchableOpacity} from "react-native";
import React, {useState} from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import NewsStyles from './NewsStyles'

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
    <View style={NewsStyles.container}>
      <Text style={NewsStyles.title}>We got the news!</Text>
      {isSearching ? (
        <View style={NewsStyles.searchContainer}>
          <TextInput
            placeholder="Search for news"
            style={NewsStyles.searchInput}
            onChangeText={setQuery}
            value={query}
          />
          <TouchableOpacity
            onPress={() => {
              searchNews(), setIsSearching(!isSearching);
            }}
          >
            <AntDesign
              style={NewsStyles.icon}
              name="search1"
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={NewsStyles.textArticle}>1 {articles[0]?.title}</Text>
        </View>
      )}
    </View>
  );
};

export default News;
