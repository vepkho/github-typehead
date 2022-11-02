import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';

import { infoActions } from '../../store/info-slice';
import { useDispatch } from 'react-redux';


<<<<<<< HEAD
const CardData = ({id, image, owner, name, description, visibility, watchers}) => {
=======
const CardData = ({id, image, owner, date, name, description, visibility, update, watchers}) => {
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
    const dispatch = useDispatch();
    const sendData = () => {
        dispatch(
            infoActions.addToList({
                id,
                image,
                owner,
                name,
                description,
                visibility,
                watchers
            })
        )
    }
  return (
    <Card sx={{ width: 345, height: 320 }} key={id} onClick={sendData}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>

  )
}

export default CardData