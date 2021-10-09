import { useActions } from '../../hook/useAction'
import { ICharacter } from '../../models/character'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Character({
  id,
  name,
  image,
  species,
  gender,
  status,
  location,
  isFavorite,
}: ICharacter) {
  const { deleteCharacterAC, AddOrDeleteFavoriteAC } = useActions()

  return (
    <Card>
      <CardHeader avatar={<Avatar alt={name} src={image} />} title={name} subheader={status} />
      <CardMedia component="img" height="250" image={image} alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: {species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={() => AddOrDeleteFavoriteAC(id)}>
          <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteCharacterAC(id)}>
          <DeleteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  )
}
