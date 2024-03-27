import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    
    return (
        <Button
        variant="contained"
        color="primary"
        onClick={goBack}
        >
        Back
        </Button>
    );
    };

export default BackButton;
