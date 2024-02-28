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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Page = () => {
  const { t } = useTranslation('common');
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
            {t('quote')}
          </Highlight>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t('my-info.name')}
            </Heading>
            <p>{t('my-info.myposition')}</p>
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
            {t('section-1.title')}
          </Heading>
          <Paragraph>{t('section-1.description')}</Paragraph>
          <Box align="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('section-2.title')}
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            {t('section-2.bio-description.1998')}
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            {t('section-2.bio-description.2015')}
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            {t('section-2.bio-description.2019')}
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            {t('section-2.bio-description.2022')}
          </BioSection>
          <BioSection>
            <BioYear>2022 {t('section-2.bio-description.present')}</BioYear>
            {t('section-2.bio-description.2022-to-present')}
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('section-3.title')}
          </Heading>
          <Paragraph>{t('section-3.description')}</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('section-4.title')}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, 'common'))
    }
  };
}

export default Page;
