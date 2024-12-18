"use client"
import { Box, Breadcrumbs, Container, Typography, Link } from "@mui/material";
// import { useRouter } from "next/router";

const Breadcrumb = ({ title, subtitle, breadcrumbLinks, backgroundImage }) => {
    // const router = useRouter();

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                py: 8,
                
                textAlign: "center",
                width:'100%'
            }}
        >
            
            <Container maxWidth={false}>
                <Box
                    display="flex" 
                    justifyContent="space-between"
                    alignItems="center" 
                    width="100%"
                >
                    
                    <Box>
                        <Typography variant="h4" color="black" fontWeight="bold" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="#5E17EC" gutterBottom>
                            {subtitle}
                        </Typography>
                    </Box>

                    {/* Right Side: Breadcrumb */}
                    <Box>
                        <Breadcrumbs
                            aria-label="breadcrumb"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 2,
                                color: "#5E17EC",
                            }}
                        >
                            {breadcrumbLinks.map((link, index) => {
                                const isLast = index === breadcrumbLinks.length - 1;
                                return isLast ? (
                                    <Typography key={index} color="#5E17EC">
                                        {link.name}
                                    </Typography>
                                ) : (
                                    <Link
                                       href={link.href}
                                        key={index}
                                        underline="hover"
                                        color="#000"
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     router.push(link.href || "/");
                                        // }}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </Breadcrumbs>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Breadcrumb;
