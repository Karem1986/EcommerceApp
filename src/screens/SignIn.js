import React from 'react';

import {Text, View} from 'react-native';
import {Button} from '../components/Button';

export default function SignIn({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', paddig: 20}}>
      <Button>Sign In</Button>
    </View>
  );
}
