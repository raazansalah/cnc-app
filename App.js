import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { StyleSheet, Text, View, Button } from "react-native";
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
      <View style={styles.btn}>
        <Button
          title="circle"
          onPress={() => clickHandler("0")}
          color="#ffffff"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="square"
          onPress={() => clickHandler("1")}
          color="#ffffff"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="rectangle"
          onPress={() => clickHandler("2")}
          color="#ffffff"
        />
      </View>
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
    backgroundColor: "red",
    margin: 15,
    borderRadius: 15,
    width: 150,
  },
});
