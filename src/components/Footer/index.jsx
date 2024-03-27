import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <footer>
        <div>
            <Typography vriant="overline">
            &copy; {new Date().getFullYear()} <a href="https://www.dotnetdudes.com">dotnetdudes</a>
            </Typography>
        </div>
        </footer>
    );
    }

export default Footer;