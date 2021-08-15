import { Box, Container, Heading, Text } from '@chakra-ui/react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader(props: PageHeaderProps) {
  const { title, subtitle } = props;

  return (
    <Box pt='45px' pb='30px' borderBottomWidth={1} mb='30px'>
      <Container maxW='container.md' position='relative'>
        <Heading as='h1' color='black' fontSize='35px' fontWeight={700} mb='5px'>{title}</Heading>
        <Text fontSize='15px'>{subtitle}</Text>
      </Container>
    </Box>
  );
}
