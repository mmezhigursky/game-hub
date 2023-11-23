import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const fakeGenreList = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  return (
    <>
      {isLoading &&
        fakeGenreList.map((genre) => (
          <List>
            <ListItem key={genre} paddingY={"5px"}>
              <HStack>
                <GenreListSkeleton key={genre} />
              </HStack>
            </ListItem>
          </List>
        ))}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderEndRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
