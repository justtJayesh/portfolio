import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import profilePicture from "../Assets/picture.jpg";
// import sticker1 from "../Assets/stickers/web.png";
import sticker2 from "../Assets/stickers/programmer.png";
import sticker3 from "../Assets/stickers/game-development.png";
import sticker4 from "../Assets/stickers/internet.png";
import sticker5 from "../Assets/stickers/videogame.png";

export const About = () => {
    return (
        <div id="about">
            <Box
                backgroundColor="#ffffffff"
                display="flex"
                minH="75vh"
                alignItems="center"
                position={"relative"}
                py={{ base: 10, md: 10, lg: 0 }}
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

                {/* <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={sticker1}
                        alt="sticker-1"
                        style={{
                            position: "absolute",
                            top: "6%",
                            left: "5%",
                            rotate: "10deg",
                            zIndex: 1,
                            width: "8%",
                        }}
                    />
                </Box> */}
                <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={sticker2}
                        alt="sticker-2"
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "12%",
                            zIndex: 1,
                            rotate: "-25deg",
                            width: "8%",
                        }}
                    />
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={sticker3}
                        alt="sticker-3"
                        style={{
                            position: "absolute",
                            top: "40%",
                            right: "4%",
                            zIndex: 1,
                            rotate: "30deg",
                            width: "8%",
                        }}
                    />
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={sticker4}
                        alt="sticker-4"
                        style={{
                            position: "absolute",
                            top: "7%",
                            right: "50%",
                            zIndex: 1,
                            rotate: "-10deg",
                            width: "8%",
                        }}
                    />
                </Box>
                <Box display={{ base: "none", lg: "block" }}>
                    <img
                        src={sticker5}
                        alt="sticker-5"
                        style={{
                            position: "absolute",
                            bottom: "15%",
                            right: "35%",
                            zIndex: 1,
                            rotate: "30deg",
                            width: "8%",
                        }}
                    />
                </Box>
            </Box>
        </div>
    );
};
