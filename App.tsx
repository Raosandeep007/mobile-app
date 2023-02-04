import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { Counter } from "./screens/Counter";
import { Timer } from "./screens/Timer";

export default function App() {
  return (
    <SafeAreaView>
      <View className="t-flex t-items-center">
        <Counter />
        <Timer />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
