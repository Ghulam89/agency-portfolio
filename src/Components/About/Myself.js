import { Box,Typography, Grid } from "@mui/material";
// import AboutImage from "@/Assets/header/logo.png";
//Styles
import styles from "@/Styles/About/Myselft.styles";
import Image from "next/image";

const Myself = () => {
    return (
          
           <Box sx={styles.Container}>
  <Grid container spacing={4} alignItems="center">
    <Grid item xs={12} md={3}>
      <Image src={'/avatars/header/logo.png'} alt="About" width={300} height={140} />
    </Grid>

    <Grid item xs={12} md={8}>
      <Typography variant="h4" sx={styles.Title}>
        Welcome to Nextwave Tech – Fastest Growing IT Company
      </Typography>
      <Typography variant="body1" sx={styles.Description}>
      Nextwaves Tech is a premier IT software company established in November  2018 in Pakistan. Specializing in a broad range of services, we excel in  Website Development, Graphic Design, Digital Marketing, and Mobile App Development. Our expertise also extends to creating  Content Management Systems (CMS), Customer Relationship Management (CRM) solutions, and Enterprise Resource Planning (ERP) systems,

      </Typography>
      <Typography variant="body1" sx={styles.Description}>
      As a leading software house in Pakistan and a registered entity with the Pakistan Software Export Board (PSEB), Nextwaves Tech has earned a solid reputation for delivering innovative and high-quality IT solutions. We take pride in offering a comprehensive suite of services, including Website Design, API Development, Search Engine Optimization (SEO), and  iOS App Development.

      </Typography>
      <Typography variant="body1" sx={styles.Description}>
      With a team of highly skilled and experienced developers, we have successfully completed numerous complex projects, consistently demonstrating our technical proficiency and commitment to excellence. Our customer-centric approach ensures long-lasting relationships with clients, as we prioritize their satisfaction and business growth.

      </Typography>
      <Typography variant="body1" sx={styles.Description}>
      Over the past 7 years, Nextwaves Tech has designed and developed hundreds of websites, Mobile Applications, logos, and icons, employing a unique, research-driven methodology. Our dedication to providing top-notch services has solidified our position as one of the most trusted software houses in the IT industry in Pakistan.

      </Typography>
    </Grid>
  </Grid>
</Box>

       
    );
};
export default Myself;