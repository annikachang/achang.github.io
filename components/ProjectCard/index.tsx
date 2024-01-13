
import "./index.css";
import { ProjectDescriptionType } from '../../app/info';

const ProjectCard: React.FC<{ projectDesc: ProjectDescriptionType }> = ({projectDesc}) => {
    return (
        <a className="project-link" href={projectDesc.link}>
        <div className="project-card">
            <img src={projectDesc.svg_url}/>
            <div className="project-desc">
                <p className="p-larger">{projectDesc.name}</p>
                <p>{projectDesc.desc}</p>
            </div>
        </div>
        </a>
    )
};

export default ProjectCard;
