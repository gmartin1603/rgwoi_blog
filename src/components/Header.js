import { AppBar, Drawer, IconButton, List, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { Link, NavLink } from 'react-router-dom';
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
                            <Link to='/' onClick={() => handleClick(false)}>
                                <h3>Right Guy Workin' On It</h3>
                                <img src="https://lh3.googleusercontent.com/eGlLn0ipFSTXYpQ5CXDXrSkrP9wni26gPMscWqzcfto4u6DnYc3ZLkIeeTdPe6sLIayozofTAYTpAFatZQCt84AIRbwSwV8hvMKPp2mH8Fa60FEeW52xoOD2DheLv8d4O3eFSpcR7Q=w2400" alt="logo" />
                            </Link>
                        <List>
                            {
                                state.routes.length > 0 &&
                                state.routes.map(link => (
                                    <NavLink
                                    to={link.url}
                                    onClick={() => handleClick(false)}
                                    key={link.label}
                                    style={({isActive}) => (isActive ? {border:"1px solid", borderColor: "#00A36C", fontWeight:"600", color: "#00A36C", boxShadow:"inset 3px 2px #00A36C"} : {})}
                                    > {link.label} </NavLink>
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
                        <NavLink
                        to={link.url}
                        key={link.label}
                        style={({isActive}) => (isActive ? {border:"1px solid", borderColor: "#00A36C", fontWeight:"600", color: "#00A36C", boxShadow:"inset 3px 2px #00A36C"} : {})}
                        >
                        {link.label}
                        </NavLink>
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
    flex-direction: column;
    height: 100%;
    background-color: black;
    color: white;
    text-align: center;
    a {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
        color: white;
    }
    h3 {
        padding: 5% 0%;
    }
    img {
        width: 70%;
        object-fit: contain;
        padding: 5% 0%;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        a {
            text-align: center;
            font-size: 105%;
            text-decoration: none;
            color: white;
            padding: 2% 5%;
            margin: 2% 10%;
        }
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
    margin-left: 5%;
        a {
            font-size: 105%;
            text-decoration: none;
            color: white;
            padding: 2% 5%;
            margin: 0% 2%;
        }
        a:hover {
            color: #00A36C;
        }
        @media (max-width: 1000px) {
                display: none;
        }

`