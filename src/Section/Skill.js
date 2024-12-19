import { Container, Grid } from "@mui/material";

//Components
import Experience from "@/Components/Skill/Experience";
import Progress from "@/Components/Skill/Progress";

const Skill = () => {
    return (
        <Container maxWidth={false}  style={{marginTop:'42px'}} >
            <Grid container spacing={3}>
                <Grid item md={6} xxs={12}>
                    <Experience />
                </Grid>
                <Grid item md={6} xxs={12}>
                    <Progress />
                </Grid>
            </Grid>
            
        </Container>
    );
};
export default Skill;