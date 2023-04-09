import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { Games } from "../hooks/useGames";
import getCroppedImageUrl from "../Services/image-url";
import MetaCriticScore from "./MetaCriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaCriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
