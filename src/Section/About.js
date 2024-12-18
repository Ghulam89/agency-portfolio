import { Box, Container } from "@mui/material";

// SectionHeading
import SectionHeading from "@/Utilis/SectionHeading";

//Component
import Solution from "@/Components/About/Solution";
import Myself from "@/Components/About/Myself";

const About = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={{ pt: "5em" }} id="about">
            
             <Myself />
             <Box marginTop={3} >
             <SectionHeading
                value1="We Provide Best Solutions"
                value2="For Your Business"
                border={true}
            />
             </Box>
            <Solution />
           
        </Container>
    );
};
export default About;