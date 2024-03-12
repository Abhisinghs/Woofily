import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Card = (
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading
) => {
  return (
    <>
      <VStack className="course" alignItems={["center", "flex-start"]}>
        <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
      </VStack>
    </>
  );
};

export default Card;
