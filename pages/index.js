import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, Icon } from '@chakra-ui/icons';
import Link from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Motion from '../components/layouts/article';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord
} from 'react-icons/io5';
import { Highlight } from '@chakra-ui/react';

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
          <Highlight
            query="― Steve Jobs"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
          >
            "Your time is limited, so don&apos;t waste it living someone
            else&apos;s life. Don&apos;t be trapped by dogma — which is living
            with the results of other people&apos;s thinking. And most
            important, have the courage to follow your heart and intuition. They
            somehow already know what you truly want to become. Everything else
            is secondary." ― Steve Jobs
          </Highlight>
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
              src="/images/ava.JPG"
              alt="avatar"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            A recent graduate in IT programming from the GoIT school seeking to
            apply for a position as a front-end developer. I have sound
            knowledge of HTML, CSS, JavaScript, and React. Also, I have hands-on
            experience in following Agile/Scrum methodology when working in a
            team. I am a fast learner, responsible, and ready for challenging
            tasks. I believe that my technical skills and knowledge of
            JavaScript, React, Redux, HTML and CSS will render me a valuable
            addition to your team.
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
            Graduated from a local school.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from K. Satpayev KazNITU University with a degree in
            technical engineering.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Graduated from an online IT programming school.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working as a freelancer
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Adilnurlan" target="_blank">
                <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/adil-nurlan-079654261/"
                target="_blank"
              >
                <Button variant="ghost" leftIcon={<Icon as={IoLogoLinkedin} />}>
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://instagram.com/adil.nurlan?igshid=NDk5N2NlZjQ="
                target="_blank"
              >
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.com/channels/@me" target="_blank">
                <Button variant="ghost" leftIcon={<Icon as={IoLogoDiscord} />}>
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Motion>
  );
};

export default Page;
