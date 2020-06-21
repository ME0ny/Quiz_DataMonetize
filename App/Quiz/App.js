import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tscreen1 from './screens/Tscreen1'
import Ten from './screens/Ten'
import Tscreen2 from './screens/Tscreen2'
import Tscreen from './screens/Tscreen'
import Finish from './screens/Finish'

const Stack = createStackNavigator();

export default function App(props) {
	const containerRef = React.useRef();
	const [initialNavigationState, setInitialNavigationState] = React.useState();
	return (
      <View style={styles.container}>
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
           <Stack.Navigator>
            <Stack.Screen name="Route" component={Tscreen} />
            <Stack.Screen name="Ten" component={Ten} />
            <Stack.Screen name="Tscreen1" component={Tscreen1} />
            <Stack.Screen name="Tscreen2" component={Tscreen2} />
            <Stack.Screen name="Finish" component={Finish} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});