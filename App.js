import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text,SafeAreaView,Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>Hello World</Text>
      </View>

      <View style={styles.bottom_view_container}>
        <Text>Merhaba Dünya</Text>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  upper_view_container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bottom_view_container: {
    flex: 1,
    backgroundColor: 'green',
  },

})



export default App;