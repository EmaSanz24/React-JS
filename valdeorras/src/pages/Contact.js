import "../styles/Contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Como Contactarnos</h2>
      <div className="details">
        <div>
          <EmailIcon sx={{ fontSize: 60, color: "#4d0b0b" }} />
          <p>
            <b>Email:</b> valdeorrasclothing@gmail.com
          </p>
        </div>
        <div>
          <PlaceIcon sx={{ fontSize: 60, color: "#4d0b0b" }} />
          <p>
            <b>Address:</b> Avenida Gutierrez Oficina 302. Bs. As. Argentina.
          </p>
        </div>
        <div>
          <PhoneInTalkIcon sx={{ fontSize: 60, color: "#4d0b0b" }} />
          <p>
            <b>Phone:</b> (+549) 11 4066 0705
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
