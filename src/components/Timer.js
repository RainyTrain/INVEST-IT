import { HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const dateRef = useRef(null);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    dateRef.current = new Date().toTimeString();
  }, []);

  return (
    <VStack gap="10px" align="left">
      <HStack>
        <Text fontWeight="bold">Seconds spend on page:</Text>
        <p>{`${seconds} s`}</p>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Time of entering the website:</Text>
        <p>{dateRef.current}</p>
      </HStack>
    </VStack>
  );
};

export default Timer;
