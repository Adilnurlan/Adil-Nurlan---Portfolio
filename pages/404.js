import Link from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Link href="/">
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
