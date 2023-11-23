import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { GiGamepad } from "react-icons/gi";
import { RiGamepadLine } from "react-icons/ri";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          boxSize={6}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
