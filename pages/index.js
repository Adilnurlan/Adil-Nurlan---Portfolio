import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Motion from '../components/layouts/article';

const Page = () => {
  return (
    <Motion>
      <Container maxW="container.sm">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={5}
          mt={5}
          align="center"
        >
          Hello everyone, I&apos;am a full-stack developer based in Almaty
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nurlan Adil
            </Heading>
            <p>Developer (Javascript | React | Next)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="10px"
              src="/images/ava.jpg"
              alt="avatar"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            A recent graduate in IT programming from the GoIT school seeking to
            apply for a position as a front-end developer. I have sound
            knowledge of HTML, CSS, JavaScript, and React. Also, I have hands-on
            experience in following Agile/Scrum methodology when working in a
            team. I am a fast learner, responsible, and ready for challenging
            tasks. I believe that my technical skills and knowledge of
            JavaScript, React, Redux, HTML and CSS will render me a valuable
            addition to your web development team.
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Porfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in Kyzylorda (K-orda), Kazakhstan.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Graduate from school.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from university.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Trained as a it programmer at an online school GoIT.
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I like
          </Heading>
          <Paragraph>
            Music, Playing video-games, Coding, Learning new
          </Paragraph>
        </Section>
      </Container>
    </Motion>
  );
};

export default Page;
