import React, { Component } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



export default class Header extends Component {
    render() {
         
        return (
            <div>
              <AppBar position="static">
              <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  News
                </Typography>
                <section className="ml-auto">
                <IconButton color="inherit" aria-label="home" >
                  <HomeIcon />
                </IconButton> 
                </section>                
              </Toolbar>
            </AppBar>
                
            </div>
        )
    }
}


