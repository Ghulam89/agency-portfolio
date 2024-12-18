import { Box } from "@mui/material";
import Image from "next/image";

//Logos
import Logos from "@/Assets/header/logo.png";
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
                <Image src={Logos} width={200} height={80} alt="Logo" />
            </Link>
        </Box>
    );
};
export default Logo;