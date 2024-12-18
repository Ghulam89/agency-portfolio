import { Box, Grid, Stack, Typography, Divider, Rating } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

//Data
import Awards from "@/Data/Skill/Award.data";

//Styles
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
        <Box sx={{
            // height: "100vh",
            paddingBottom: 5,
            background: `url(${'https://www.elexoft.com/assets/images/parallax/bg-001.jpg'}) center/cover no-repeat`,

        }}>
            <Divider sx={styles.Divider} />
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item md={12} xxs={12}>
                    <Box ref={ref}>
                        <Grid container spacing={2}>
                            {Awards &&
                                Awards.map((award, i) => (
                                    <Grid item xxs={3} key={i}>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography variant="h4" component="h4" sx={styles.AwardNumber}>
                                                <Stack direction="row" sx={{ justifyContent: "center" }}>
                                                   
                                                    <Typography variant="h3" component="span" sx={{ color: "#5e17ec" }}>
                                                    <Typography fontSize={40}>
                                                        {award?.icons}
                                                    </Typography>
                                                        <CountUp end={startCount ? award.award : 0} duration={2} />
                                                    </Typography>
                                                    {/* <Typography color="white" variant="h4" component="h4">
                                                        +
                                                    </Typography> */}
                                                </Stack>
                                            </Typography>
                                            <Typography variant="body1"  textTransform={'uppercase'} paddingTop={1} component="p" color="white" sx={styles.AwardTitle}>
                                                {award.title}
                                            </Typography>
                                            {/* {award.star > 0 && (
                        <Rating
                          name="half-rating-read"
                          defaultValue={award.star}
                          precision={0.5}
                          readOnly
                          size="small"
                          sx={{ mt: "5px" }}
                        />
                      )} */}
                                        </Box>
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
