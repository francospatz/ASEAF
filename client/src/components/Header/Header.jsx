import React, { useContext, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LoggedContext } from "../../context/loggedContext";
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const { logged, setLogged, user, setUser } = useContext(LoggedContext);
  const nav = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <a href="https://www.diadelpijama.org/" className="list__a" target="_blank">
              <ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#808080' }}>DÍA DEL PIJAMA</Typography>} />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton>
            <Link to='/' className="list__a"><ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#808080' }}>APUNTA TU COLE</Typography>} /></Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton>
            <a href="https://www.diadelpijama.org/colabora.html" className="list__a" target="_blank">
              <ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#808080' }}>COLABORA</Typography>} />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding>
          <ListItemButton>
            <a href="https://www.diadelpijama.org/aseaf.html" className="list__a" target="_blank">
              <ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#808080' }}>ASEAF</Typography>} />
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem key={5} disablePadding>
          <ListItemButton>
            <Link to='/login' className="list__a"><ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#808080' }}>ZOMI</Typography>} /></Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const listAdmin = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={5} disablePadding>
          <ListItemButton>
            <ListItemText disableTypography primary={<Button
                key={3}
                onClick={() => {
                  handleLogout();
                }}
                sx={{ color: '#E36C35' }}

              >
                <LogoutIcon sx={{mr: 1}}/>CERRAR SESIÓN
              </Button>} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = async () => {
    await axios.get(`/api/logout/${user}`);
    setUser('');
    setLogged(false);
    nav("/");
  };

  const handleLogged = () => {
    return logged ?
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },

                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#E36C35',
                textDecoration: 'none',
              }}
            >
              ZOMI
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <React.Fragment key={'left'}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer('left', true)}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: '#E36C35' }} />
                </IconButton>
                <Drawer
                  anchor={'left'}
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                >
                  {listAdmin('left')}
                </Drawer>
              </React.Fragment>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,

                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#E36C35',
                textDecoration: 'none',
              }}
            >
              ZOMI
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key={3}
                onClick={() => {
                  handleLogout();
                }}
                sx={{ color: '#E36C35' }}

              >
                <LogoutIcon sx={{mr: 1}}/>CERRAR SESIÓN
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      :
      <>
        <AppBar position="static" color="default">
          <Container maxWidth="xl">
            <Toolbar disableGutters>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },

                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#E36C35',
                  textDecoration: 'none',
                }}
              >
                ASEAF
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <React.Fragment key={'left'}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer('left', true)}
                    color="inherit"
                  >
                    <MenuIcon sx={{ color: '#E36C35' }} />
                  </IconButton>
                  <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                  >
                    {list('left')}
                  </Drawer>
                </React.Fragment>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,

                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#E36C35',
                  textDecoration: 'none',
                }}
              >
                ASEAF
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} justifyContent="flex-end">
                <a href="https://www.diadelpijama.org/" className="list__a" target="_blank">
                  <Button
                    key={1}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#E36C35', display: 'block' }}

                  >
                    DÍA DEL PIJAMA
                  </Button>
                </a>
                <Link to='/' className="list__a">
                  <Button
                    key={2}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#E36C35', display: 'block' }}
                  >
                    APUNTA TU COLE
                  </Button>
                </Link>
                <a href="https://www.diadelpijama.org/colabora.html" className="list__a" target="_blank">
                  <Button
                    key={3}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#E36C35', display: 'block' }}
                  >
                    COLABORA
                  </Button>
                </a>
                <a href="https://www.diadelpijama.org/aseaf.html" className="list__a" target="_blank">
                  <Button
                    key={3}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#E36C35', display: 'block' }}
                  >
                    ASEAF
                  </Button>
                </a>
                <Link to='/login' className="list__a">
                  <Button
                    key={3}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#E36C35', display: 'block' }}
                  >
                    ZOMI
                  </Button>
                </Link>
              </Box>


            </Toolbar>
          </Container>
        </AppBar>
      </>;
  };

  return (
    <>
      {handleLogged()}
    </>

  );
};

export default Header;


