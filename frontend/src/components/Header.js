import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Linkar from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Logo from  '../img/home/logoHome.png'



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // backgroundColor: '#009c58' 
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: "space-around",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: 14
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
 
}));



export default function Header() {

  const classes = useStyles();

  return (
    
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} >
    
        <Toolbar className={classes.toolbar} >

        <Grid container   direction="row" justify="space-around" alignItems= "center" >
        
            <Grid item  xs={12} sm={4} md={4}  lg={3}  >

              <Grid container
                direction="row"
                justify="space-around"
                alignItems="center">

                 <img class="d-block w-50 my-3" src={Logo} />          

              </Grid>


            </Grid>
            
          <Grid item  xs={12} sm={6} md={6}  lg={6}  >

          <Grid container
                direction="row"
                justify="space-around"
                alignItems= "center"
                >

              <nav class="my-3">
                <Linkar variant="button" color="textPrimary" href="/home" className={classes.link} >
                  Home
                </Linkar>
                <Linkar variant="button" color="textPrimary" href="#" className={classes.link}>
                  Produtos
                </Linkar>
                <Linkar variant="button" color="textPrimary" href="#" className={classes.link}>
                  Contatos
                </Linkar>
              </nav>

            </Grid>
        
          </Grid>
          </Grid>
        </Toolbar>

      </AppBar>

  );
}