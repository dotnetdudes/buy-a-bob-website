import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import BobCartoon from '../../images/bob-cartoon-small.png'

const HomeBobBio = () => {
    return (
        <Card>
        <CardHeader title="Bob at work" />
        <CardMedia
            component="img"
            height="194"
            image={BobCartoon}
            alt="Bob at work"
        />
        <CardContent>
            <p>
            Bob Morton is a local artist living and working in Rockingham, Western Australa.
            </p>
        </CardContent>
        <CardActions>
            <p>Get in touch</p>
        </CardActions>
        </Card>
    );
    }

export default HomeBobBio;
