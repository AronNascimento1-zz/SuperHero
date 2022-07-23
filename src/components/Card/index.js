import { CardContainer } from "./styles";

export const Card = ({ index, images, name, id, appearance }) => {
  return (
    <CardContainer id={id} key={index}>
      <div className="div-container">
      <div className="div-img">
        <img src={images?.sm} alt={name} />
      </div>
      <div className="div-name">
        <div className="div-title">
          <h3>{name}</h3>
        </div>

        <ul>
          <li>
            <strong>Race:</strong>
            {appearance.race || "unknown"}
          </li>
          <li>
            <strong>Height:</strong>
            {appearance.height[1]}
          </li>
          <li>
            <strong>Weight:</strong>
            {appearance.weight[1]}
          </li>
          <li>
            <strong>Gender:</strong>
            {appearance.gender}
          </li>
          <li>
            <strong>EyeColor:</strong>
            {appearance.eyeColor}
          </li>
        </ul>
      </div>
      </div>
     
     
    </CardContainer>
  );
};
