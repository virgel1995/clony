import { FC } from "react";
import {
  Box,
  BoxProps,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import { Section } from "@/components/section";
import {
  RiStackFill,
  RiAppsFill,
  RiFingerprintFill,
  RiNavigationFill,
  RiRefreshFill,
  RiFlashlightFill,
} from "react-icons/ri";
import { Feature } from "@/types";

interface FeaturesProps extends BoxProps {}

const features: Feature[] = [
  {
    title: "Awesome Feature # 1",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    icon: RiStackFill,
  },
  {
    title: "Awesome Feature # 2",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    icon: RiAppsFill,
  },
];

const Features: FC<FeaturesProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Section
        title="For developers. For designers. For everyone."
        text="safe time make big things with easy way no hard code or long yime typing."
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
        {features.map(({ title, description, icon }, index) => (
          <FeatureCard
            key={index}
            title={title}
            description={description}
            icon={<Icon as={icon} boxSize="6" />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
