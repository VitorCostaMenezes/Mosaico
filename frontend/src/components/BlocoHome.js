import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";


const desativaLink = {
  ss:{
      textDecoration: 'none',
      margin: 10,
      width: "100%",
    }
}


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: 14
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  }
}));

export default function BlocoHome({infos}) {
  const classes = useStyles();

    return (
        <Container maxWidth="md" component="main">
       
        <Grid container spacing={5} alignItems="flex-end" justify="space-around">
        
          {infos.map(({nome, id, link, foto, foto2, foto3}) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={id} xs={12} sm={6} md={4} >
              <Card>
                <CardHeader
                  title={nome}
                  // subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing} >
                  
                    <CardMedia
                      className={classes.media}
                      image={foto}
                      title={nome}
                      component="img"
                            />

                  </div>
                  
                </CardContent>

                <CardActions>
                <Link to={link} id="id" style={desativaLink.ss} >  

                    {/* <Button fullWidth variant={'outlined'} color="primary"> */}
                    <Button fullWidth variant={'contained'} color="primary">
                      {/* {tier.buttonText} */}
                      Clique para ver
                    </Button>

                  </Link>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}
