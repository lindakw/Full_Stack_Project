import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Linking,
  Alert,
  Platform
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import styles from "./NewsStyle";
import { AntDesign } from "@expo/vector-icons";

const News = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  const searchNews = () => {
    if (searchTerm === "") {
      Alert.alert("Can't leave empty. Please enter a text.")
    } else {
      (async () => {
        try {
      
            const newsResponse= Platform.OS === "web" ? await axios.get(`http://localhost:3000/api/?q=${searchTerm}`) : await axios.get( `http://10.0.2.2:3000/api/?q=${searchTerm}`)
            
        
          setIsSearching(true);
          setArticles(newsResponse.data);
          console.log("This is our data ===>", newsResponse.data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
   
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We got the news!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for news"
          placeholderTextColor="gray"
          style={styles.searchInput}
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
        <TouchableOpacity
          onPress={() => {
            searchNews(), setIsSearching(!isSearching), setSearchTerm("");
          }}
        >
          <AntDesign
            style={styles.icon}
            name="search1"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.articleContainer}>
        {/* <Image style={styles.imgArticle} source={{
          uri: articles[0]?.urlToImage,
        }}></Image>
      

        <Text style={styles.textArticle}>{articles[0]?.title}</Text>
        
      <Text style={styles.texts}>{articles[0]?.source.name}</Text>
       */}
        {isSearching ? (
          <FlatList
            data={articles.slice(0, 7)}
            renderItem={({ item, index }) => (
              <View key={index}>
                <Image
                  style={styles.imgArticle}
                  source={{
                    uri: item.urlToImage,
                  }}
                />
                <TouchableOpacity
                  style={styles.articlelink}
                  onPress={() => Linking.openURL(item.url)}
                >
                  <Text style={styles.textArticle}>{item.title}</Text>
                </TouchableOpacity>
                <Text style={styles.textArticle}>{item.description}</Text>

                <Text style={styles.texts}>{item.source.name}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : null}
      </View>
    </View>
  );
};

export default News;
