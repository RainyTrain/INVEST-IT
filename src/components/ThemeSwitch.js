import React from 'react';
import { Switch, VStack } from '@chakra-ui/react';

const ThemeSwitch = (props) => {
  const { theme, handleTheme } = props;

  const changeTheme = () => {
    handleTheme();
  };

  return (
    <VStack>
      <p>Dark theme</p>
      <Switch
        isChecked={theme === 'dark-mode'}
        onChange={changeTheme}
        colorScheme="teal"
        size="lg"
      />
    </VStack>
  );
};

export default ThemeSwitch;
