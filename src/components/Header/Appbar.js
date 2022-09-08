import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';
import { ContextQuery } from '../../App';

import ChangeThemeComponent from '../ChangeThemeComponent';

const Appbar = ({ disclosure }) => {
  const isLargerScreen = useContext(ContextQuery)

  return (
    <Flex w="100%" align={'center'}>
      <IconButton ml={2} aria-label='theme'  icon={<AiOutlineMenu/>}
        onClick={disclosure.onOpen}
      />
      <Heading ml={isLargerScreen ? "4" : '0'} size="md" fontWeight='semibold' color='cyan.400'>
        Heading
      </Heading>
      <Spacer></Spacer>
      <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillLinkedin/>}
        onClick={() => window.open('https://www.linkedin.com/in/dmytro-chornyi-96103a212/', '_blank')}
      />
      <IconButton ml={2} aria-label='theme' variant='outline' icon={<AiFillGithub/>}
        onClick={() => window.open('https://github.com/Flame221', '_blank')}
      />
      <IconButton ml={2} aria-label='theme' variant='outline' icon={<SiCodewars/>}
        onClick={() => window.open('https://www.codewars.com/users/Flame221', '_blank')}
      />
      <ChangeThemeComponent/>
    </Flex>
  )
}

export default Appbar