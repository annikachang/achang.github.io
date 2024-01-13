
import "./index.css";
import { ContactType } from '../../app/info';

const ContactCard: React.FC<{ contactDesc: ContactType }> = ({contactDesc}) => {
    return (
        <div className="contact-card flex">
        <a href={contactDesc.link}>
            <img src={contactDesc.svg_url}/>
        </a>
        <a className="contact-link" href={contactDesc.link}>
            <p>{contactDesc.name}</p>
        </a>
        </div>
    )
};

export default ContactCard;
