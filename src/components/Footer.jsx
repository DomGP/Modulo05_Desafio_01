import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <AppBar position="static" color="error" className="footer">
        <Toolbar>
            <Typography 
                sx={{
                    display:'flex', 
                    justifyContent:'center',
                    flexDirection:'column',
                    alignItems:'center',
                    width:'100%',
                    lineHeight:'0.5'}}>
            <p className='styleFooterUno'>Happy-Cake</p>
            <p className='styleFooterDos'>Pasteles Felices 2024 ®</p>
            </Typography>
        </Toolbar>
        </AppBar>
    );
};

export default Footer;

