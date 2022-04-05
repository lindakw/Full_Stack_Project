import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
  },

  searchInput: {
    marginTop: 10,
    height: 30,
    width: 300,
    borderWidth: 1,
    backgroundColor:"#95B2B0",
    borderColor: "white",
    borderRadius: 20,
    color: "white",
    fontSize: 19,
    marginLeft: 30,
    paddingLeft: 10,
  },
  icon: {
    marginTop: 11,
    marginLeft: 15,
  },
  newsImg: {
    position: "absolute",
    width: '100%',
    height: '100%', 
   },
  title: {
    fontFamily: "monospace",
    marginTop: 8,
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  textArticle: {
    color: "white",
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    // fontFamily: "fantasy",
  },
  flatList: {
    backgroundColor: "black",
  },
  imgArticle: {
    width: "100%",
    height: 180,
    alignSelf: "center",
    marginTop: 20,
  },
  texts: {
    color: "white",
    fontSize: 14,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 30,

  },
  
  imgArticle: {
    width: "100%",
    height: 180,
    alignSelf: "center",
    marginTop: 20,
  },
  texts: {
    color: "white",
    fontSize: 14,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 30,
  }
});

export default styles;
