import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  Buttons: {
    marginVertical: 5,
    width: '50%',
  },
  hdRight: {
    marginRight: 10,
  },
  hdRightImg: {
    width: 130,
    height: 50,
  },

  CounterState: {
    justifyContent: 'center',
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginTop: 200,
    width: 250,
    minHeight: 200,
  },
  TextCount: {

    fontSize: 30,
    color: 'red',
  },
});

 export const details = StyleSheet.create({

  scrollContainer: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});

export const settings = StyleSheet.create({

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop:300
  },
  image: {
    width: '50%', // Adjust the width as needed
    height: 500, // Adjust the height as needed
    marginBottom: 10, // Add margin between images

  },
  hovered: {
    borderWidth: 5, // Add border when hovered
    borderColor: 'blue', // Border color when hovered
  },
})

export const text = StyleSheet.create({
  textHome1:{
    fontSize:30,
    color:'#4b0082',
    fontWeight:'bold'
  },
  textHome2:{
    fontSize:30,
    color:'#1e90ff',
    fontWeight:'bold'
  }
})