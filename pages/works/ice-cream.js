import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Work = () => {
  const { t } = useTranslation('iceCream');
  return (
    <Motion title="Ice cream">
      <Container maxW="container.sm" mt={5}>
        <Title>
          {t('title')} <Badge>2022</Badge>
        </Title>
        <Paragraph>{t('description')}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t('link-title-1')}</Meta>
            <Link
              href="https://adilnurlan.github.io/ice-cream-project/"
              target="_blank"
            >
              {t('link-title-1-name')}
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('link-title-2')}</Meta>
            <Link
              href="https://github.com/Adilnurlan/ice-cream-project"
              target="_blank"
            >
              {t('link-title-2-name')}
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t('link-title-3')}</Meta>
            <span>HTML, CSS, SaSS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ice-cream.png" />
        <WorkImage src="/images/ice-cream-slider.png" />
      </Container>
    </Motion>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'iceCream', 'works']))
    }
  };
}

export default Work;
