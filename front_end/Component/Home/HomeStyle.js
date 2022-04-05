import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "darkBrown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily:"monospace",
  },
  weather: {
    width: 150,
    height: 100,
    backgroundColor: "#647AA3",
    borderRadius: 40,
  },
 
  newsContainer: {
    width: 280,
    height: 70,
    backgroundColor: "#95B2B0",
    borderRadius: 40,
    paddingTop: 20,
    marginBottom: 40,
  
  },
  weatherImg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    // top: 0,
  },
 
});
export default styles;
