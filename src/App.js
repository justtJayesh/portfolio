// styles
import "./App.css";
import "./Fonts/VertigoDisplay.ttf";
import "./Fonts/Season.ttf";
import "./Fonts/Aeonik.ttf";
import "./Fonts/Gridular.ttf";

// components
import { Text } from "@chakra-ui/react";
import { About } from "./Components/About";
import GithubStats from "./Components/GithubStats";
import { HeroSection } from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skill";
import Contact from "./Components/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <Skills />
            <Project />
            <GithubStats />
            <Contact />
            <Text
                fontSize={"sm"}
                fontWeight={"light"}
                textAlign={"center"}
                m={"20px auto"}
            >
                Copyright ©2024 All rights reserved{" "}
            </Text>
        </div>
    );
}

export default App;
