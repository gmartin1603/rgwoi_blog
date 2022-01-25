import { AppBar, Drawer, IconButton, List, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { routes } from '../data/routes';
import { useStateValue } from '../context/stateProvider';

function Header() {

    const [open, setOpen] = useState(false);

    const [state, dispatch] = useStateValue();
    
    const handleClick = (bool) => {
        setOpen(bool);
    }

    return (
        <AppBar position="sticky">
        <Toolbar sx={{bgcolor: 'black'}}>
            {/* nav drawer mode */}
            <ButtonBox>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => handleClick(true)}
                    >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={open}
                    onClose={() => handleClick(false)}
                    >
                <Box
                    sx={{ width: 250, height: '100%' }}
                    role="presentation"
                >
                        <ButtonDrawer>
                        <List>
                            {
                                state.routes.length > 0 && 
                                state.routes.map(link => (
                                    <Link to={link.url} onClick={() => handleClick(false)} key={link.label} > {link.label} </Link>
                                ))
                            }
                        </List>
                        </ButtonDrawer>
                </Box>
                </Drawer>
            </ButtonBox>
            <Logo>
                <Link to="/">
                <h1>Right Guy Workin' On It</h1>
                </Link>
            </Logo>
            {/* nav bar mode */}
            <NavContainer>
                {
                    state.routes.length > 0 && 
                    state.routes.map(link => (
                        <Link to={link.url} key={link.label} > {link.label} </Link>
                    ))
                }
            </NavContainer>
        </Toolbar>
        </AppBar>
    );
}

export default Header;

const ButtonBox = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`
const ButtonDrawer = styled.div`
    display: flex;
    height: 100%;
    background-color: black;
    ul {
        display: flex;
        flex-direction: column;
    }
    
a {
    font-size: 105%;
    text-decoration: none;
    color: white;
    padding: 10% 20%;
    margin: 2% 10%;
} 
`
const Logo = styled.div`
    color: white;
    padding-right: 5%;
    font-size: 70%;
    a {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: white;
    }
`
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    
        a {
            font-size: 105%;
            text-decoration: none;
            color: white;
            padding: 0% 5%;
            margin: 0% 10%;
        }
        a:hover {
            color: #00A36C;
        }
        @media (max-width: 1000px) {
                display: none;
        }

`