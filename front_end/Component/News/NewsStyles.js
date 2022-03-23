import { StyleSheet } from "react-native";
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
    color: "black",
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
  },
  icon: {
    marginTop: 25,
    marginLeft: 20,
  },
  title: {
    //fontFamily: "fantasy",
    fontSize: 30,
    //fontWeight: 800,
    color: "white",
  },
  textArticle: {
    color: "white",
    fontSize: 15,
    fontFamily: "",
  },
});

export default styles;
