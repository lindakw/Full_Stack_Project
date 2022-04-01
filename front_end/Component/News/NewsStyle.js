import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
    borderColor: "white",
    borderRadius: 20,
    padding: 10,
    color: "white",
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
    fontSize: 30,
    color: "pink",
  },
  textArticle: {
    color: "white",
    fontSize: 15,
  },
});

export default styles;
