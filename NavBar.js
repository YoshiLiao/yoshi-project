import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>帳戶管理</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    width:'100%',
    height:100,
    backgroundColor: '#FDC863',
  },
  title: {
    fontSize: 17,
    fontWeight:'bold',
    textAlign:'center'
  }
});
