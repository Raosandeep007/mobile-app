import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const Timer = () => {
  const [time, setTime] = useState("");
  var timerId: number;

  const startTimer = () => {
    timerId = setInterval(() => {
      var date: any = new Date();
      var newDate: string = date.toLocaleTimeString();
      setTime(newDate);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  return (
    <View className="t-flex t-items-center t-border t-border-solid t-rounded">
      <Text>Counter App</Text>
      <View className="t-flex t-items-center t-mt-4">
        <Text>{time}</Text>
        <View className="t-flex t-flex-row">
          <Button title="Start" onPress={startTimer} color="green" />
          <Button title="Stop" color="red" onPress={stopTimer} />
        </View>
      </View>
    </View>
  );
};
