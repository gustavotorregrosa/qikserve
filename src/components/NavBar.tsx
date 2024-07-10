import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { IState } from '@/store';
import { IRestaurantState } from '@/store/restaurant/slice';


const pages = ['Menu', 'Entrar', 'Contato'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname.toLowerCase())
  }, [])

  return (
    <AppBar position="static" sx={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className='h-[52px]'>
      <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1, flexDirection: 'row', justifyContent: 'center', display: { xs: 'none', md: 'flex' }, height: '52px'}}>
            {pages.map((page) => {

              const style = { color: 'white', display: 'block', fontWeight: 400, width: '15em', borderColor: 'white', borderRadius: 0, borderBottom: 'none'}

                if(path && path.includes(page.toLowerCase())){
                  style.borderBottom = 'solid'
                }

              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={style}
                >
                  {page}
                </Button>
              )
            })}
          </Box>

          <Box sx={{ flexGrow: 1, float: 'right', display: { xs: 'flex', md: 'none' } }}>
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
      </Container>
    </AppBar>
  );
}
export default NavBar;
