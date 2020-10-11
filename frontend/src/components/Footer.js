import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Linkar from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
        E-mail: mosaicopersonalizados@gmail.com 
        {<br/>}
        Tel: 71 0000-0000
        {<br/>}
        Whatsapp: 71 0000-0000
        {<br/>}
        {<br/>}

      {'Copyright © '}
        Mosaico Personalizados
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const desativaLink = {
  ss:{
      textDecoration: 'none',
      margin: 10,
      width: "100%",
    }
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Whatsapp',
    description: "/img/footer/zap.svg",
    link: "https://api.whatsapp.com/send?phone=5571991604540&text=Olá!",
  },
  {
    title: 'Instagram', 
    description: "/img/footer/instagram.svg",
    link: "https://www.instagram.com/mosaicopersonalizados/",
  },
  {
    title: 'Facebook',
    description: "/img/footer/facebook.svg",
    link: "#",
  },
];


export default function Footer() {

  const classes = useStyles();

  return (

     <div>

                {/* Footer */}
                <Container maxWidth="md" component="footer" className={classes.footer}>

                    <Grid container spacing={4} justify="space-evenly">

                    {footers.map((footer) => (
                        <Grid item xs={4} sm={4} key={footer.title}>

                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {footer.title}
                        </Typography>

                        <Linkar href={footer.link} target="blank" color="textSecondary" >
                            <Grid container spacing={4}   justify="space-evenly">
                                <img class="d-block w-25 my-3" src={footer.description} />      
                            </Grid>
                        </Linkar>

                        </Grid>
                    ))}
                    </Grid>

                    <Box mt={5}>
                        <Copyright />
                    </Box>

                </Container>
      {/* End footer */}

      </div>
  );
}