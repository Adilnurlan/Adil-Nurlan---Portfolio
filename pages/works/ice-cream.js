import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';

const Work = () => {
  return (
    <Motion title="Ice cream">
      <Container maxW="container.sm" mt={5}>
        <Title>
          Ice-cream <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Commercial website for the sale of ice cream. Also the website with an
          adaptive layout. It was a team project. My role: Developer. This site
          entirely made with HTML and CSS.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://makoto-kino14.github.io/ice-cream-html-css-project2/"
              target="_blank"
            >
              Visit site
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link
              href="https://github.com/Makoto-kino14/ice-cream-html-css-project2"
              target="_blank"
            >
              Visit GitHub page
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, SaSS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ice-cream.png" />
        <WorkImage src="/images/ice-cream-slider.png" />
      </Container>
    </Motion>
  );
};

export default Work;
