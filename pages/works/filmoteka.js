import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';

const Work = () => {
  return (
    <Motion title="Filmoteka">
      <Container maxW="container.sm" mt={5}>
        <Title>
          Filmoteka <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Application for choosing a movie to watch later. It was a team
          project. My role: Developer. I specifically did a pagination logic.
          Check out the app below.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://polonkoev.github.io/filmoteka/" target="_blank">
              Visit site
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link
              href="https://github.com/Polonkoev/filmoteka/tree/main/src"
              target="_blank"
            >
              Visit GitHub page
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, Vanille JavaScript, REST API, AJAX, Parcel</span>
          </ListItem>
        </List>
        <WorkImage src="/images/filmoteka.png" />
        <WorkImage src="/images/filmoteka-library.png" />
      </Container>
    </Motion>
  );
};

export default Work;
