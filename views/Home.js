import React from "react";

import List from "../components/List";

import { StyleSheet, View } from "react-native";

import { MediaProvider } from "../contexts/MediaContext";

const Home = ({navigation}) => {
    return (
        <MediaProvider>
        <View style={styles.container}>
          <List navigation={navigation} />
        </View>
      </MediaProvider>  

    );
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      backgroundColor: "#fff"
  
    }
  });
  