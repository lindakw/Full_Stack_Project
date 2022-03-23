import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
   
  },
  weatherImg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    top: 0,
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 25,
    
  },
  input: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 10,
    width: 250,
    color:"white",
  },
  
});

export default styles;
