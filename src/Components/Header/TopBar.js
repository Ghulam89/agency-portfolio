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
    <>
    <Container maxWidth={false}>
      <Box display={'flex'}  alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'} container spacing={2} >
        <Box   sx={{
            ...styles.Navs,
            display: {
                xs: " none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block", 
            },
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 1
          }}>
            <List sx={{ display: 'flex',alignItems:'center'}} > 
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <HiOutlineMail color='red' size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">info@company.com</Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <IoCall   color='red'  size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">+92 514 592013</Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', marginRight: 2, flexBasis: 'auto' }}>
                <TbDeviceLandlinePhone  color='red'  size={24} style={{ marginRight: 8 }} />
                <Typography variant="body2" color="textSecondary">+92 514 592013</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Box  sx={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center",
            gap: 3, 
            borderRadius: 1,
            width:'100%'
        }}>
            <List sx={{ display: 'flex',alignItems:'center',gap:'15px',justifyContent:'center'}}>
             
              <IoLogoFacebook size={20} />
             
             
             
              <FaTwitter size={20} />
              
         
              
              <FaLinkedin size={20}  />
              <FaWhatsapp size={20}  />

         
           
       
              
            </List>
            
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
      </Box>
    </Container>
   {/* <div className='' style={{borderBottom:'.5px solid gray',borderColor:'red'}}></div> */}
    </>
    
  );
};

export default TopBar;
