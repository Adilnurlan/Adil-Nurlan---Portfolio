import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Work = () => {
  const { t } = useTranslation('phonebook');
  return (
    <Motion title="Phonebook">
      <Container maxW="container.sm" mt={5}>
        <Title>
          {t('title')} <Badge>2022</Badge>
        </Title>
        <Paragraph>{t('description')}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('link-title-1')}</Meta>
            <Link
              href="https://adilnurlan.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
            >
              {t('link-title-1-name')}
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('link-title-2')}</Meta>
            <Link
              href="https://github.com/Adilnurlan/goit-react-hw-08-phonebook"
              target="_blank"
            >
              {t('link-title-2-name')}
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('link-title-3')}</Meta>
            <span>JavaScript, React, Redux, MUI</span>
          </ListItem>
        </List>
        <WorkImage src="/images/phonebook.png" />
        <WorkImage src="/images/phonebook.png" />
      </Container>
    </Motion>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'phonebook',
        'works'
      ]))
    }
  };
}

export default Work;
