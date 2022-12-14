import { DocsLayout } from "@/layouts";
import { Heading, Text } from "@chakra-ui/react";

const Docs = () => {
  return (
    <DocsLayout title="Resources">
      <Heading as="h1">Documenting</Heading>
      <Text mt="6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iste
        eum id minus, earum laboriosam nesciunt ratione temporibus recusandae,
        debitis qui, officia dolorum delectus. Enim vero libero quam dignissimos
        nulla?
      </Text>
    </DocsLayout>
  );
};

export default Docs;
