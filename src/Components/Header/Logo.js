import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Box sx={{ a: { cursor: "pointer" } }}>
            <Link
                href="home"
                // spy={true}
                // smooth={true}
                // duration={500}
            >
                <Image src={'/avatars/header/logo.png'} width={200} height={80} alt="Logo" />
            </Link>
        </Box>
    );
};
export default Logo;