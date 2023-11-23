import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton boxSize={"32px"} borderEndRadius={8} />
      <SkeletonText fontSize={"lg"}>...</SkeletonText>
    </>
  );
};

export default GenreListSkeleton;
