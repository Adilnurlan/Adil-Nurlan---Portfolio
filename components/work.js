import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => {
  return (
    <Box>
      <Link as={NextLink} href="/works">
        <Link>Works</Link>
      </Link>
      <span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
          {children}
        </Heading>
      </span>
    </Box>
  );
};

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius={lg} w="full" src={src} alt={alt} mb={4} />;
};

export const Meta = () => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
};
