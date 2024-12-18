import { Box, ButtonBase, Container, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoCall, IoLogoFacebook } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import styles from "@/Styles/Header/Bar.styles";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const TopBar = () => {
  return (
    <Container maxWidth={false} sx={{ paddingTop:1}}>
      <Grid container spacing={2}>
        <Grid item xs={12}  sm={6}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 1
          }}>
            <List sx={{ display: 'flex', padding:0}}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <HiOutlineMail size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">info@company.com</Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <IoCall size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">+92 514 592013</Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <TbDeviceLandlinePhone size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">+92 514 592013</Typography>
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{
            display: 'flex',
            justifyContent:'end',
            alignItems: 'center',
            // padding: '10px 0',
            borderRadius: 1
          }}>
            <List sx={{ display: 'flex',alignItems:'center',gap:'15px'}}>
             
              <IoLogoFacebook size={20} />
             
             
             
              <FaTwitter size={20} />
              
         
              
              <FaLinkedin size={20}  />
              <FaWhatsapp size={20}  />

         
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
           
       
              
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopBar;
