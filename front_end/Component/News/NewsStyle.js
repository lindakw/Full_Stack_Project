import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // // alignItems: "center",
    // height: "100%",
    
  },
  searchContainer: {
    flexDirection: "row",
  },

  searchInput: {
    marginTop: 25,
    height: 36,
    width: 250,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    color: "white",
    fontSize: 16,
    marginLeft: 45,
    paddingLeft: 10,
  },
  
  icon: {
    marginTop: 25,
    marginLeft: 20,
  },
  title: {
    // fontFamily: "fantasy",
    fontSize: 40,
    color: "pink", 
    textAlign: "center",
  },
  textArticle: {
    color: "white",
    fontSize: 13,
    marginTop: 20,
    marginLeft: 20,
   
    // fontFamily: "fantasy",
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
