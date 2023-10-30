import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Blogs', 'Case Studies'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar elevation={0} sx={{ backgroundColor: isScrolled ? `rgba(255, 255, 255, ${isScrolled ? 0.9 : 0.72})` : 'transparent', backdropFilter: isScrolled ? 'blur(10px)' : 'none', boxShadow: isScrolled ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none', opacity: isScrolled ? 0.9 : 1 }}>
      <div className='container'>
        <Container maxWidth="xl">
          <Toolbar>

            {/* for large screen  ------------------------------------------------------------------------------------------------------------------------------ */}

            <Avatar src='assets/images/hyperboostlogo1.png' alt='' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '2rem' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 25,
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Hyperboost
            </Typography>

            {/* for small screen ------------------------------------------------------------------------------------------------------------------------------ */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar src='assets/images/hyperboostlogo1.png' alt='' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: '2rem' }} />

            {/* for small screen  ------------------------------------------------------------------------------------------------------------------------------ */}

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'black',
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Hyperboost
            </Typography>

            {/*  for large screen ------------------------------------------------------------------------------------------------------------------------------ */}

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => {
                if (page === 'Blogs') {
                  return (
                    <Link to="https://blog.hyperboost.in" key={page} style={{ textDecoration: 'none' }}>
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'black', display: 'block', mr: 5, textDecoration: 'none' }}
                      >
                        {page}
                      </Button>
                    </Link>
                  );
                } else {
                  return (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'black', display: 'block', mr: 5, textDecoration: 'none' }}
                    >
                      {page}
                    </Button>
                  );
                }
              })}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <a href="https://calendly.com/ranaaditya">
                <Button variant="contained" color="primary" sx={{ fontWeight: 200, fontSize: '10px', padding: '0.75rem' }}>
                  Get Started
                </Button>
              </a>
            </Box>

          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}

export default Navbar;