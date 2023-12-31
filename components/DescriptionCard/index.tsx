import MainDescription from "../MainDescription";
import "./index.css";
import { MainDescriptionType } from '../../app/info';

const DescriptionCard: React.FC<{ mainDesc: MainDescriptionType, index: number }> = ({mainDesc, index}) => {
    let stylingClass: string = "desc-card";
    if (index % 2 != 0) {
        stylingClass += " even-card"
    }
    return (
        <div className={stylingClass}>
            <h1>{mainDesc.header}</h1>
            <MainDescription subDesc={mainDesc.description}></MainDescription>
        </div>
    )
};

export default DescriptionCard;
