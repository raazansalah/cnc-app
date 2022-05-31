import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
const clickHandler = (num) => {
  console.log(num);
  // return axios.post("http://localhost:3000/val", {
  //   "val":"num"
  // });
  // .then(async (res) => {
  //   console.log(res);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};
export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => clickHandler("0")}>
        <Text style={styles.text}>Cirgle</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => clickHandler("1")}>
        <Text style={styles.text}>Rectangle</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => clickHandler("2")}>
        <Text style={styles.text}>Square</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
