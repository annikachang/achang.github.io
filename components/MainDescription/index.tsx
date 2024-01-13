import "./index.css";
import { DescriptionType } from '../../app/info';


const MainDescription: React.FC<{ subDesc: DescriptionType[] }> = ({subDesc}) => {
    return (
        <>
        {subDesc.map((value, index) => (
        <div key={index} className="desc_container">
        <img src="images/bullet.svg"/>
        <div>
            <p className="sub_header">{value.sub_header}</p>
            {value.body.map((value, index) => (
            <p className="body" key={index}>{value}</p>
            ))}
            <p className="date">{value.date}</p>
        </div>
        </div>
        ))}
        </>
    );
};

export default MainDescription;
