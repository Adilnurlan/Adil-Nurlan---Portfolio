import Logo from './logo';
import { forwardRef } from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, Icon } from '@chakra-ui/icons';
import ThemeToggleBtn from './theme-toggle-btn';
import { IoLogoGithub } from 'react-icons/io5';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <Link
            href="https://github.com/Adilnurlan/my-portfolio"
            target="_blank"
          >
            <Icon as={IoLogoGithub} /> Source code
          </Link>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleBtn />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem>
                  <Link
                    href="https://github.com/Adilnurlan/my-portfolio"
                    target="_blank"
                  >
                    View source
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
