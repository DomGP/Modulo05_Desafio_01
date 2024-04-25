
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';


const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar 
            position="static"
            color='error'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CakeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mb:1 }} /> 
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar-nav"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem sx={{display:'flex', flexDirection:'column', alignItems: 'flex-start'}}>
                                <Link
                                    to='/'
                                    className="text-black ms-3 text-decoration-none">
                                    Home
                                </Link>
                                <Link
                                    to='/contacto'
                                    className="text-black ms-3 text-decoration-none">
                                    Contacto
                                </Link>
                            </MenuItem>
                        </Menu>
                        <CakeIcon sx={{ display: { xs: 'flex', md: 'none' }, ml:1, mt:1 }} />
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            mt:1,
                            ml:1,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        HappyCake
                    </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        HappyCake
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link
                            to='/'
                            className="text-white ms-3 text-decoration-none">
                                <HomeIcon sx={{ mb:1, mr:0.5 }} />
                                    Home
                        </Link>
                        <Link
                            to='/contacto'
                            className="text-white ms-3 text-decoration-none">
                                <ContactsIcon sx={{ mb:1, mr:0.5 }} />    
                                    Contacto
                            </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;