import {
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { IoLinkSharp, IoLogoGithub } from "react-icons/io5";
import project2 from "../Assets/project_posters/2.png";
import project3 from "../Assets/project_posters/3.png";
import project5 from "../Assets/project_posters/5.png";
import freelance from "../Assets/project_posters/Freelance-work.png"

const Project = () => {
    return (
        <div id="projects">
            <Box w={{ lg: "72%", base: "90%" }} margin={"60px auto"}>
                <Box padding={"0 20px"} borderLeft={"3px solid gray"}>
                    <Heading fontFamily={"gridular"}>My Work</Heading>
                </Box>

                {/* Project 1 */}
                <Stack
                    display={"flex"}
                    alignItems={"center"}
                    className="project-card"
                >
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        // borderBottom={"1px solid gray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={freelance}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading
                                        fontSize={"2xl"}
                                        className="project-title"
                                    >
                                        Forzo Industries - (Freelance Work)
                                    </Heading>
                                    <Badge>Individual Project</Badge>
                                    <Box className="project-tech-stack">
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="black">
                                                NextJs
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                TypeScript
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                ShadCN
                                            </Badge>
                                            <Badge colorScheme="green">
                                                NodeMailer
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text
                                        textAlign={"justify"}
                                        className="project-description"
                                    >
                                        Forzo Industrial Solutions Private
                                        Limited is a private company
                                        incorporated in India on January 17,
                                        2022. It is registered with the
                                        Registrar of Companies in Pune,
                                        Maharashtra.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            className="project-github-link"
                                            href="https://github.com/justtJayesh/forzo-industries"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            className="project-deployed-link"
                                            href="https://www.forzo.in/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

                {/* Project 5 */}
                <Stack
                    display={"flex"}
                    alignItems={"center"}
                    className="project-card"
                >
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid lightgray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project5}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading
                                        fontSize={"2xl"}
                                        className="project-title"
                                    >
                                        DailyObjects Clone
                                    </Heading>
                                    <Badge>Collaborative Project</Badge>
                                    <Box className="project-tech-stack">
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="orange">
                                                React
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                Redux
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                            <Badge colorScheme="green">
                                                MongoDB
                                            </Badge>
                                            <Badge colorScheme="grey">
                                                Express
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text
                                        textAlign={"justify"}
                                        className="project-description"
                                    >
                                        DailyObjects is an Indian company that
                                        specializes in designing and
                                        manufacturing smartphone cases, laptop
                                        sleeves, and other accessories. They
                                        offer a wide range of products featuring
                                        unique designs created by independent
                                        artists from around the world. The
                                        company also provides custom printing
                                        services for personalized products.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            className="project-github-link"
                                            href="https://github.com/justtJayesh/vestal-time-2973"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            className="project-deployed-link"
                                            href="https://regstuff.vercel.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

                {/* Project 3 */}
                <Stack
                    display={"flex"}
                    alignItems={"center"}
                    className="project-card"
                >
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid lightgray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project3}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading
                                        fontSize={"2xl"}
                                        className="project-title"
                                    >
                                        American Eagle Clone
                                    </Heading>
                                    <Badge>Collaborative Project</Badge>
                                    <Box className="project-tech-stack">
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="blue">
                                                React js
                                            </Badge>
                                            <Badge colorScheme="purple">
                                                Redux
                                            </Badge>
                                            <Badge colorScheme="orange">
                                                HTML
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                CSS
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text
                                        textAlign={"justify"}
                                        className="project-description"
                                    >
                                        American Eagle Outfitters, Inc., also
                                        known as American Eagle, is an American
                                        lifestyle, clothing, and accessories
                                        retailer headquartered at SouthSide
                                        Works in Pittsburgh, Pennsylvania.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            className="project-github-link"
                                            href="https://github.com/justtJayesh/American-Eagle-Clone"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            className="project-deployed-link"
                                            href="https://american-snake.netlify.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>

                {/* Project 2 */}
                <Stack
                    display={"flex"}
                    alignItems={"center"}
                    className="project-card"
                >
                    <Box
                        w={{ lg: "100%" }}
                        padding={"30px 0"}
                        borderBottom={"1px solid lightgray"}
                    >
                        <Stack
                            display={"flex"}
                            flexDirection={{ lg: "row", base: "column" }}
                            justifyContent={"space-evenly"}
                            alignItems={"top"}
                        >
                            <Box
                                w={{ lg: "26%", base: "60%" }}
                                borderRadius={"5px"}
                                margin={{ base: "auto" }}
                                marginTop={"0.5rem"}
                            >
                                <Image
                                    src={project2}
                                    w={"100%"}
                                    borderRadius={5}
                                />
                            </Box>
                            <Box
                                w={{ lg: "67%", base: "100%" }}
                                padding={"5px"}
                            >
                                <Stack
                                    spacing={3}
                                    textAlign={{ base: "center", lg: "left" }}
                                >
                                    <Heading
                                        fontSize={"2xl"}
                                        className="project-title"
                                    >
                                        LensKart Clone
                                    </Heading>
                                    <Badge>Individual Project</Badge>
                                    <Box className="project-tech-stack">
                                        <HStack
                                            justifyContent={{
                                                base: "center",
                                                lg: "left",
                                            }}
                                        >
                                            <Badge colorScheme="blue">
                                                React js
                                            </Badge>
                                            <Badge colorScheme="purple">
                                                Redux
                                            </Badge>
                                            <Badge colorScheme="orange">
                                                HTML
                                            </Badge>
                                            <Badge colorScheme="blue">
                                                CSS
                                            </Badge>
                                            <Badge colorScheme="yellow">
                                                JavaScript
                                            </Badge>
                                        </HStack>
                                    </Box>
                                    <Text
                                        textAlign={"justify"}
                                        className="project-description"
                                    >
                                        Lenskart is the leading e-commerce
                                        portal for eyewear in India. It has
                                        revolutionised the eyewear industry in
                                        the country with its omni-channel
                                        approach.
                                    </Text>
                                    <HStack
                                        spacing={5}
                                        justifyContent={{
                                            base: "center",
                                            lg: "left",
                                        }}
                                    >
                                        <Link
                                            className="project-github-link"
                                            href="https://github.com/justtJayesh/LensKart-Clone"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"blue"}
                                            >
                                                <HStack>
                                                    <Text>GitHub</Text>
                                                    <IoLogoGithub />
                                                </HStack>
                                            </Button>
                                        </Link>
                                        <Link
                                            className="project-deployed-link"
                                            href="https://lenscraft.vercel.app/"
                                            _hover={{ textDecoration: "none" }}
                                            target="_blank"
                                        >
                                            <Button
                                                size="sm"
                                                colorScheme={"orange"}
                                            >
                                                <HStack>
                                                    <Text>Deployment</Text>
                                                    <IoLinkSharp />
                                                </HStack>
                                            </Button>
                                        </Link>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
};

export default Project;
