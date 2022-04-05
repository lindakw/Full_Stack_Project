import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flex: 1,
  },

  weatherImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 30,
    
  },
  input: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 30,
    width: 290,
    height: 30,
    backgroundColor: "#95B2B0",
    color:"white",
    paddingLeft: 10,
  },
  cityText: {
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "monospace",
    
  },
  tempText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "monospace",

  },
  infoText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  marginBottom: 5,
  fontFamily: "monospace",
    
  },
  highLow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
  },
  highText: {
    color: "white",
    fontSize: 16,
    marginRight: 20,
    fontFamily: "monospace",
    
  },
  lowText: {
    color: "white",
    fontSize: 16,
  },
  infoStyle: {
    color: "white",
    fontSize: 18,
    fontWeight:"bold",
    flexDirection: "column",
    alignSelf: "center",
    // flexWrap: "wrap",
   marginTop: 10,
  },
  
  forcastView: {
    // marginTop: 20,
    //backgroundColor: "#696969",
    width: 300,
    height: 400,
    marginLeft: 40,
    //borderRadius: 5,
    //borderWidth: 0.5,
    //borderColor: "white",
    opacity: 0.7,
  },

  forecastCard: {
    backgroundColor: "#696969",
    marginTop: 20,
    borderRadius: 5,
    height: 80,
  },
});

export default styles;
