```javascript
import React, { useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const Item = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
  </View>
));

const MyComponent = () => {
  const data = useMemo(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      title: `Item ${i}`,
      description: `This is item ${i} description.`
    }))
  , []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} />}
      maxToRenderPerBatch={10} // Optimize rendering
      windowSize={10} // Adjust window size for better virtualization
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
export default MyComponent
```