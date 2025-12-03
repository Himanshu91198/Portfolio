import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="tel:9699050321" rel="noreferrer">
          <CallIcon />
        </a>
        <a href="mailto:auti.himanshu9@gmail.com" rel="noreferrer">
          <EmailIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
