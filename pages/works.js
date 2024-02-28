import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbTrendMovies from '../public/images/trend-movies.png';
import thumbPhonebook from '../public/images/phonebook.png';
import thumbIceCream from '../public/images/ice-cream.png';
import thumbFilmoteka from '../public/images/filmoteka.png';
import thumbGallery from '../public/images/gallery-main.png';
import Motion from '../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Works = () => {
  const { t } = useTranslation('works');
  return (
    <Motion>
      <Container maxW="container.sm" mt={5}>
        <Heading as="h3" fontSize={20} mb={4}>
          {t('title')}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="trendmovies"
              title={t('work-1.title')}
              thumbnail={thumbTrendMovies}
            >
              {t('work-1.description')}
            </WorkGridItem>
          </Section>
          {/* <Section delay={0.3}>
            <WorkGridItem
              id="phonebook"
              title={t('work-2.title')}
              thumbnail={thumbPhonebook}
            >
              {t('work-2.description')}
            </WorkGridItem>
          </Section> */}
          <Section delay={0.3}>
            <WorkGridItem
              id="ice-cream"
              title={t('work-3.title')}
              thumbnail={thumbIceCream}
            >
              {t('work-3.description')}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="filmoteka"
              title={t('work-4.title')}
              thumbnail={thumbFilmoteka}
            >
              {t('work-4.description')}
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="gallery"
              title={t('work-5.title')}
              thumbnail={thumbGallery}
            >
              {t('work-5.description')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Motion>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'works']))
    }
  };
}

export default Works;
