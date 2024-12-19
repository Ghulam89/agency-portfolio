import { Box, Grid, Stack, Typography, Divider } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Data
import Awards from "@/Data/Skill/Award.data";

// Styles
import styles from "@/Styles/Skill/Award.styles";

const Award = () => {
    const [startCount, setStartCount] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        onChange: (isVisible) => {
            if (isVisible) setStartCount(true);
        },
    });

    return (
        <Box
            sx={{
                paddingBottom: 5,
                background: `url(${'https://www.elexoft.com/assets/images/parallax/bg-001.jpg'}) center/cover no-repeat`,
                width: "100%",
            }}
        >
            <Divider sx={styles.Divider} />
            <Grid
                container
                sx={{
                    // height: "100vh", // Full viewport height
                    alignItems: "center", // Vertically align items
                    justifyContent: "center", // Horizontally align items
                }}
            >
                <Grid item xs={12} md={8}>
                    <Box ref={ref}>
                        <Grid container spacing={2} justifyContent="center">
                            {Awards &&
                                Awards.map((award, i) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        key={i}
                                        sx={{ textAlign: "center" }}
                                    >
                                        <Typography
                                            variant="h4"
                                            component="h4"
                                            sx={styles.AwardNumber}
                                        >
                                            <Stack
                                                direction="row"
                                                sx={{ justifyContent: "center" }}
                                            >
                                                <Typography
                                                    variant="h3"
                                                    component="span"
                                                    sx={{ color: "red" }}
                                                >
                                                    <Typography fontSize={40}>
                                                        {award?.icons}
                                                    </Typography>
                                                    <CountUp
                                                        end={startCount ? award.award : 0}
                                                        duration={2}
                                                    />
                                                </Typography>
                                            </Stack>
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            textTransform="uppercase"
                                            paddingTop={1}
                                            component="p"
                                            color="white"
                                            sx={styles.AwardTitle}
                                        >
                                            {award.title}
                                        </Typography>
                                    </Grid>
                                ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Award;
