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
    width: '100%',
    height: '100%',
    top: 0,
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 20,
    
  },
  input: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 40,
    width: 250,
    color:"white",
    paddingLeft: 10,
    
  },
  cityText: {
    color: "white",
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    
  },
  tempText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",

  },
  infoText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  marginBottom: 5,
    
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
    
  },
  lowText: {
    color: "white",
    fontSize: 16,
  },
  infoStyle: {
    color: "white",
    fontSize: 18,
    flexDirection: "column",
    alignSelf: "center",
    // flexWrap: "wrap",
    paddingTop: 10,
  },
  forcastView: {
    // marginTop: 20,
    backgroundColor: "#696969",
    width: 300,
    height: 100,
    marginLeft: 40,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'white',
   
    
  }
  
});

export default styles;
