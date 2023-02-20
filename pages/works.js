import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbTrendMovies from '../public/images/trend-movies.png';
import thumbPhonebook from '../public/images/phonebook.png';
import thumbIceCream from '../public/images/ice-cream.png';
import thumbFilmoteka from '../public/images/filmoteka.png';
import Motion from '../components/layouts/article';

const Works = () => {
  return (
    <Motion>
      <Container maxW="container.sm" mt={5}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="trendmovies"
              title="Trend Movies"
              thumbnail={thumbTrendMovies}
            >
              A website for choosing a movie. A one-page website using the React
              Router routing module.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="phonebook"
              title="Phonebook"
              thumbnail={thumbPhonebook}
            >
              A contact app for saving your contacts. For react components there
              was used MUl Material library.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="ice-cream"
              title="Ice Cream"
              thumbnail={thumbIceCream}
            >
              Commercial website for the sale of ice cream.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="filmoteka"
              title="Filmoteka"
              thumbnail={thumbFilmoteka}
            >
              The application for searching movies and creating your own movie
              library.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Motion>
  );
};

export default Works;
