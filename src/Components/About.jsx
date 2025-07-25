import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import profilePicture from "../Assets/picture.jpg";

export const About = () => {
    return (
        <div id="about">
            <Box
                backgroundColor="#f0f0f0ff"
                display="flex"
                minH="75vh"
                alignItems="center"
            >
                <Box w={"72%"} margin={"auto"} color="white">
                    <Stack
                        direction={{ lg: "row", md: "column", base: "column" }}
                        justifyContent={"space-between"}
                        spacing={{ base: 4 }}
                    >
                        <Box w={{ lg: "60%", base: "100%" }}>
                            <Box
                                padding={"0 20px"}
                                color={"gray.900"}
                                borderLeft={"3px solid gray"}
                            >
                                <Heading fontFamily={"gridular"}>About</Heading>
                            </Box>
                            <Box h={"7"}></Box>
                            <Text
                                id="user-detail-intro"
                                textAlign={"justify"}
                                color={"gray.700"}
                                fontSize={"lg"}
                                fontWeight={"bold"}
                            >
                                As a proficient Full Stack Web Developer, I,
                                Jayesh, specialize in the MERN stack (Nextjs,
                                MongoDB, Express.js, React, and Node.js). With a
                                Bachelor's degree in Computer Application 💻,
                                and Masters in Business Administration 📊. I
                                combine my technical and managerial prowess,
                                innovative thinking, and analytical abilities to
                                craft cutting-edge solutions for both corporate
                                and individual clients. My expertise extends to
                                implementing Data Structures and Algorithms,
                                C++, and UI/UX Designing 🎨, allowing me to
                                tackle intricate coding challenges effectively.
                            </Text>
                            <Text
                                id="user-detail-intro"
                                textAlign={"justify"}
                                color={"gray.700"}
                                fontSize={"lg"}
                                fontWeight={"bold"}
                            >
                                I do some reading 📚 and writing ✍ ️ as well,
                                albeit not as consistently, but I’m working on
                                being better at that.
                            </Text>
                        </Box>
                        <Box w={{ lg: "25%", base: "70%" }}>
                            <Image src={profilePicture} borderRadius={"2%"} />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </div>
    );
};
