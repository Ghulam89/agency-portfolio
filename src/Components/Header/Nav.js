import { Box, ButtonBase } from "@mui/material";
import Navs from "@/Data/Header/Navs.data";

//Styles
import styles from "@/Styles/Header/Nav.styles";
import Link from "next/link";

const Nav = () => {
    return (
        <Box sx={styles.Navs}>
            {Navs &&
                Navs.map((nav, i) => (
                    nav.href ? (
                        <Link
                            key={i}
                            href={nav.href}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </Link>
                    ) : (
                        <ButtonBase key={i} sx={styles.Buttons}>
                            {nav.name} (No Link)
                        </ButtonBase>
                    )
                ))
            }
        </Box>
    );
};
export default Nav;
