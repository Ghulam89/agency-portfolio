import { Box, ButtonBase, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoCall, IoLogoFacebook } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import styles from "@/Styles/Header/Bar.styles";
import { MapIcon, EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "@/Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { LinkedIn, LinkOutlined } from '@mui/icons-material';
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
              <Stack direction="row" sx={{
        // mt: "25px",
        a: {
            color: "red",
            textDecoration: "none",
            button: {
                backgroundColor: "#F5F5F5",
                m: "0 5px",
                p: "14px",
                borderRadius: "8px",
                transition: "all 0.3s linear 0s",
                svg: {
                    fontSize: "16px",
                    transition: "0.3s",
                },
                "&:hover": {
                    backgroundColor: "red",
                    svg: {
                        color: "background.default",
                        transform: "rotate(360deg)"
                    }
                }
            }
        }
    }}>
                <Link href="https://github.com/codestation21">
                    <Link href={'#'} >
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </Link>
                 </Link> 
             <Link href="https://www.facebook.com/codestation21">
                    <Link href={'#'} >
                        <ButtonBase>
                            <FacebookIcon />
                        </ButtonBase>
                    </Link>
                 </Link>  
             <Link href="https://twitter.com/codestation21">
                   <Link href={'#'} >
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </Link>
             </Link> 
               <Link href="https://behance.com/codestation21"> 
                    <Link href={'#'} >
                        <ButtonBase>
                            <LinkedIn />
                        </ButtonBase>
                    </Link> 
                </Link> 
            </Stack>

            
            
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
