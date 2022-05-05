import { StatusBar } from 'expo-status-bar';
import NavBar from './NavBar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar />
      <Text style={[styles.title]}>老師名稱</Text>
      <Text style={[styles.name]}>Yoshi Liao</Text>
      <Image 
        source={require('./images/img_yoshi.jpg')} 
        style={{width:'100%', height:400}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3DA',
    height:'100%',
    width:'100%'
  },
  title: {
    fontSize:30,
    textAlign:'center',
    padding:20
  },
  name: {
    fontSize:24,
    textAlign:'center',
    padding:40
  }
});
