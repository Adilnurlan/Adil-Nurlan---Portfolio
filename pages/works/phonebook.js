import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import Paragraph from '../../components/paragraph';
import Motion from '../../components/layouts/article';

const Work = () => {
  return (
    <Motion title="Phonebook">
      <Container maxW="container.sm" mt={5}>
        <Title>
          Phonebook <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A contact app for saving your contacts. For react components there was
          used MUl Material library.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://adilnurlan.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
            >
              Visit site
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link
              href="https://github.com/Adilnurlan/goit-react-hw-08-phonebook"
              target="_blank"
            >
              Visit GitHub page
              <ExternalLinkIcon mx="3px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, React, Redux, MUI</span>
          </ListItem>
        </List>
        <WorkImage src="/images/phonebook.png" />
        <WorkImage src="/images/phonebook.png" />
      </Container>
    </Motion>
  );
};

export default Work;
