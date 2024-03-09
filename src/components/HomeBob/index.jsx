import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const HomeBob = () => {
    return (
        <Card>
        <CardHeader title="HomeBob" />
        <CardMedia
            component="img"
            height="194"
            image="https://source.unsplash.com/random"
            alt="random"
        />
        <CardContent>
            <p>
            This is a card component that is used in the Home page for content.
            </p>
        </CardContent>
        <CardActions>
            <p>Actions</p>
        </CardActions>
        </Card>
    );
    }

export default HomeBob;
