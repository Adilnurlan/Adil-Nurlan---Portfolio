import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  const myLogoImg = `/images/icons8-bug-ios-16-filled/${useColorModeValue(
    'buglogo',
    'buglogowhite'
  )}.png`;

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={myLogoImg} width={20} height={20} alt="mylogo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Adil Nurlan
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
