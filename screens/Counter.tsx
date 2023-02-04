import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = (value: number) => {
    setCount((prev) => prev + value);
  };
  return (
    <View className="t-flex t-items-center t-border t-border-solid t-rounded t-mb-2">
      <Text>Counter App</Text>
      <View className="t-flex t-items-center t-mt-4">
        <Text>{count}</Text>
        <View className="t-flex t-flex-row">
          <Button title="Add" onPress={() => handleCount(1)} />
          <Button
            title="Subtract"
            color="red"
            onPress={() => handleCount(-1)}
          />
        </View>
      </View>
    </View>
  );
};
