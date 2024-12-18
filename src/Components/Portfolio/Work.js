import { Grid, Box, Typography, Container } from "@mui/material";
import Link from "next/link";

//Icons
import { PlusIcon } from "@/Utilis/Icons";

//Styles
import styles from "@/Styles/Portfolio/Work.styles";
import { FaLink } from "react-icons/fa6";
import { TbZoomIn } from "react-icons/tb";

const Work = ({ works }) => {
    return (
        <Container>


            <Grid container rowSpacing={6} columnSpacing={{ xxl: 45, md: 22, smd: 10, lsm: 8, msm: 4, sm: 2, xxs: 2 }}>
                {works &&
                    works.map((work, i) => (
                        <Grid item sm={4} xxs={12} key={i}>
                            <Box sx={{
                                ...styles.ImageContainer,
                                // marginLeft: {
                                //     lsm: `${i % 3 ? "unset" : "auto"}`,
                                //     sm: "unset"
                                // }
                            }}>
                                <Link href={work.url}>
                                    <Link href={'#'} >
                                        <Box sx={styles.ImageBox}>
                                            <Box component="img" src={work.image} />
                                            <Box className="css-mui-svg">
                                                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
                                                    <Box display={'flex'} justifyContent={'center'} gap={1} >
                                                        <Typography
                                                            bgcolor={'white'}
                                                            width={45}
                                                            height={45}
                                                            display={'flex'}
                                                            justifyContent={'center'} // Centers horizontally
                                                            alignItems={'center'}     // Centers vertically
                                                        >
                                                            <FaLink  color="#ee3733" size={25} />
                                                        </Typography>

                                                        <Typography
                                                            bgcolor={'white'}
                                                            width={45}
                                                            height={45}
                                                            display={'flex'}
                                                            justifyContent={'center'} // Centers horizontally
                                                            alignItems={'center'}     // Centers vertically
                                                        >
                                                            <TbZoomIn color="#ee3733" size={25} />
                                                        </Typography>
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        component="h6"

                                                    >
                                                        {work.name}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                        </Box>

                                    </Link>
                                </Link>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};
export default Work;