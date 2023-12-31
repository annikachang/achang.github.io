import "./index.css";

export default function Project({ project }) {
  return (
    <div className="container">
      <img src={project.image}></img>
      <div className="container-text">
        <h1 className="header1">{project.name}</h1>
        <h2 className="header2">{project.description}</h2>
      </div>
    </div>
  );
}
