import React from 'react';
import { NativeBaseProvider,Box,Button,Text,Pressable,Menu,HamburgerIcon} from 'native-base';

export default function App () {
  return (
    <NativeBaseProvider>
<Text></Text>
<Box h="80%" w="90%" alignItems="flex-center">
      <Menu shadow={2} w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
    </NativeBaseProvider>
  );
}
