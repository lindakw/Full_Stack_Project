import { StyleSheet } from "react-native";

const NewsStyles = StyleSheet.create({
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
    fontSize: 15,
    fontFamily: "",
  },
});
export default NewsStyles