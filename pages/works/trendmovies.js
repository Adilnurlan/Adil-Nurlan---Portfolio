import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';

const Work = () => {
  return (
    <Motion title="Trend Movies">
      <Container maxW="container.sm" mt={5}>
        <Title>
          Trend Movies <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A website for choosing a movie. A one-page website using the React
          Router routing module. Check out the app below.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://adilnurlan.github.io/goit-react-hw-05-movies/"
              target="_blank"
            >
              Visit site
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link
              href="https://github.com/Adilnurlan/goit-react-hw-05-movies"
              target="_blank"
            >
              Visit GitHub page
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript, React</span>
          </ListItem>
        </List>
        <WorkImage src="/images/trend-movies.png" />
        <WorkImage src="/images/trend-movies-search.png" />
      </Container>
    </Motion>
  );
};

export default Work;
