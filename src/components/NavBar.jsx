import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../logo.svg';
import logopng from '../logo.png';
import '../App.css';
import CustomizedBadges from './CartWidget.jsx'; //
import { Link } from 'react-router-dom'

const pages = ['electrodomesticos', 'ropa', 'maquinaria', 'tiendas']
const settings = ['perfil', 'cuenta', 'configuracion', 'salir'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ backgroundColor: 'gold' }}>
                <Toolbar disableGutters   >
                   <Link to="/"> <img width="50px" height="50px" alt="Remy Sharp" src={logopng} /></Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            marginLeft: 2,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'roboto',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        mercado libre
                    </Typography>
                    <Button><Link to="/category/1">{pages[0]}</Link></Button>
                    <Button><Link to="/category/2">{pages[1]}</Link></Button>
                    <Button><Link to="/category/3">{pages[2]}</Link></Button>
                    <Button><Link to="/category/4">{pages[3]}</Link></Button>
                    <Button><Link><CustomizedBadges /></Link></Button>
                    <Box sx={{ flexGrow: 0 ,margin:"auto"}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar className="App-logo m-1"  width="30px" height="30px" alt="Remy Sharp" src={logo} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
