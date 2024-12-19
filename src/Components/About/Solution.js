import { Box, Grid, Typography, Button,ButtonBase, Container } from "@mui/material";

//Data
import Solutions from "@/Data/About/Solution.data";
import Link from "next/link";

//Styles
const styles = {
  container: {
    mt: "4em",
  },
  gridItem: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
    // p: 2,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      transform: "translateY(-5px)",
    },
  },
  image: {
    width: "100%",
    maxHeight: "250px",
    // mb: 2,
    objectFit: "cover",
  },
  title: {
    fontWeight: "bold",
    mb: 1,
  },
  description: {
    color: "gray",
    mb: 2,
  },
  button: {
    backgroundColor: "#e53935",
    color: "white",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
  SeeProjectBtn: {
    backgroundColor: "red",
    color: "background.default",
    p: "12px 18px",
    fontSize: "15px",
    fontWeight: 500,
    border: "1px solid transparent",
    transition: "0.3s ease",
    svg: {
        fontSize: "18px",
        ml: "8px",
        mb: "-1px"
    },
    "&:hover": {
        backgroundColor: "white",
        color: "text.primary",
        borderColor: "text.primary"
    },
    display: {
        sm: "unset",
        xxs: "none"
    },
},
};

const Solution = () => {
  return (
    <Container maxWidth={false}>
 <Box sx={styles.container}>
      <Grid container spacing={3} marginBottom={12}>
        {Solutions &&
          Solutions.map((solution, i) => (
            <Grid item md={4} sm={6} xs={12} key={i}>
              <Box sx={styles.gridItem}>
                <Box
                  component="img"
                  src={solution.icon}
                  alt={solution.title}
                  sx={styles.image}
                />
                <Box padding={3}>
                <Typography variant="h6" component="h6" sx={styles.title}>
                  {solution.title}
                </Typography>
                <Typography variant="body2" component="p" sx={styles.description}>
                  {solution.description}
                </Typography>
                {/* <Button variant="contained" sx={styles.button}>
                  CONTACT US
                </Button> */}
                 <Link
                href="#"
                spy={true}
                smooth={true}
                duration={500}
            >
                  <ButtonBase sx={styles.SeeProjectBtn}>
                  CONTACT US
                  
                </ButtonBase>
            </Link>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box display={'flex'} justifyContent={'center'}  >
      <Link
                href="#"
                spy={true}
                smooth={true}
                duration={500}
            >
                  <ButtonBase sx={styles.SeeProjectBtn}>
                    Get a Free Quote
                  
                </ButtonBase>
            </Link>
      </Box>
    </Box>
    </Container>
   
  );
};

export default Solution;
