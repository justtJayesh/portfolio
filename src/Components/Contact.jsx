import {
    Box,
    HStack,
    Heading,
    Link,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div id="contact">
            <Box
                w={{ lg: "72%", base: "90%" }}
                // h={"192px"}
                // border={"1px solid black"}
                margin={"60px auto"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
            >
                <Box
                    padding={"0 20px"}
                    mb={"30px"}
                    borderLeft={"3px solid gray"}
                >
                    <Heading fontFamily={"gridular"}>Contact Me</Heading>
                </Box>
                <VStack spacing={10}>
                    <Stack direction={"column"} spacing={8}>
                        <HStack spacing={"35px"} justifyContent={"center"}>
                            <Link
                                target="_blank"
                                id="contact-linkedin"
                                href="https://www.linkedin.com/in/jayeshmate/"
                            >
                                <IoLogoLinkedin size={"40px"} />
                            </Link>
                            <Link
                                target="_blank"
                                id="contact-github"
                                href="https://github.com/justtJayesh"
                            >
                                <IoLogoGithub size={"40px"} />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://twitter.com/justtJayesh"
                            >
                                <IoLogoTwitter size={"40px"} />
                            </Link>
                        </HStack>
                        <Stack
                            direction={{ lg: "row", base: "column" }}
                            spacing={{ lg: "8", base: "2" }}
                        >
                            <HStack>
                                <FontAwesomeIcon icon={faPhone} />
                                <Text id="contact-phone">: +917776044640</Text>
                            </HStack>
                            <HStack>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <Text id="contact-email">
                                    : Jayesh23mate@gmail.com
                                </Text>
                            </HStack>
                        </Stack>
                    </Stack>
                </VStack>
            </Box>
        </div>
    );
};

export default Contact;
