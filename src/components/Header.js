import React from 'react';
import Timer from './Timer';
import ThemeSwitch from './ThemeSwitch';
import { HStack } from '@chakra-ui/react';

const Header = (props) => {
  const { handleTheme, theme } = props;
  return (
    <HStack justifyContent="space-between" padding="20px" height="10vh">
      <Timer />
      <ThemeSwitch theme={theme} handleTheme={handleTheme} />
    </HStack>
  );
};

export default Header;
