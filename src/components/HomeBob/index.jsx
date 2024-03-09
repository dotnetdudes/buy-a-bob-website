import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomeBob = ({title, imgUrl, imgAlt, description, action='Actions', actionLink }) => {
    return (
        <Card>
        <CardHeader title={title} />
        <CardMedia
            component="img"
            height="194"
            image={imgUrl || "https://source.unsplash.com/random"}
            alt={imgAlt || "Header image"}
        />
        <CardContent>
            <p>
            {description}
            </p>
        </CardContent>
        <CardActions>
            <Button component={Link} to={actionLink}>{action}</Button>
        </CardActions>
        </Card>
    );
    }

export default HomeBob;
