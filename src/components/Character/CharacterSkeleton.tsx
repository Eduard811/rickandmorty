import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteIcon from '@mui/icons-material/Delete'

export default function CharacterSkeleton() {
  return (
    <Card>
      <CardHeader
        avatar={<Skeleton variant="circular" width={40} height={40} />}
        title={<Skeleton variant="text" width={80} height={20} />}
        subheader={<Skeleton variant="text" width={40} height={20} />}
      />
      <CardMedia>
        <Skeleton variant="rectangular" height={250} />
      </CardMedia>
      <CardContent>
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width={200} height={20} />
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  )
}
