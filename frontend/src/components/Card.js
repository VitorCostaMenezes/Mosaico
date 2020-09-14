import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import src from '../../src/img/canecas/imagem-01.jpeg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ id, nome, descricao, valor, linkMl, foto }) {
  const classes = useStyles();
  


  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardMedia
          className={classes.media}
          image={foto.im1}
          title="Contemplative Reptile"
          component="img"
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            {nome}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {descricao}
          </Typography>

        </CardContent>

      </CardActionArea>

      <CardActions>

        <Button size="small" color="primary">
            Mercado Livre
        </Button>

        <Button size="small" color="primary">
          Ver Fotos
        </Button>

      </CardActions>
    </Card>
  );
}
