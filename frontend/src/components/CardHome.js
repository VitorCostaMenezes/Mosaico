import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: 400,
    textAlign: 'center',
    margin: 20
  },
  media: {
    height: 350,
    
  },
  btn:{
      justifyContent: "center",
      marginBottom: 20
  },
  btn2:{
      width:350
  },
  s:{
    textDecoration: 'none'
  }
 
});


export default function CardHome ({item, descricao}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title={descricao}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" >
           {item}
          </Typography>
         
        </CardContent>
      </CardActionArea >

      {/* <CardActions style={{justifyContent: "center"}}> */}
      <CardActions className={classes.btn}>
        {/* <Button size="small" color="primary" >
         Clique para ver
        </Button> */}

        <Button variant="contained" color="primary" size="large"  className={classes.btn2} >
             Clique para ver
         </Button>
        
      </CardActions>
    </Card>
  );
}
