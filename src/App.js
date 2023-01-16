import { StyleSheet, ScrollView, StatusBar, SafeAreaView } from "react-native";
import Message from "./Message";

import LinearGradient from "react-native-web-linear-gradient";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#2d1d41", "#4c4799"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <ScrollView style={styles.scrollView}>
        <Message content={"Hello, how are you?"}></Message>
        <Message isOwn content={"I am fine, thank you."}></Message>
        <Message isOwn content={"What about you?"}></Message>
        <Message
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ></Message>
        <Message content={"Hello, how are you?"}></Message>
        <Message isOwn content={"I am fine, thank you."}></Message>
        <Message isOwn content={"What about you?"}></Message>
        <Message
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ></Message>
        <Message content={"Hello, how are you?"}></Message>
        <Message isOwn content={"I am fine, thank you."}></Message>
        <Message isOwn content={"What about you?"}></Message>
        <Message
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ></Message>
        <Message content={"Hello, how are you?"}></Message>
        <Message isOwn content={"I am fine, thank you."}></Message>
        <Message isOwn content={"What about you?"}></Message>
        <Message
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ></Message>
        <Message isOwn content={"What?"}></Message>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: "#141414",
    paddingTop: StatusBar.currentHeight
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw"
  },
  scrollView: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto"
  }
});

export default App;
