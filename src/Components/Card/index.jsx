import { CardContainer } from "./styles"

const Card = ({ src, title, description, titleButton }) => {
  return (
    <CardContainer>
      <img src={src} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{titleButton}</button>
      </div>
    </CardContainer>
  )
}

export default Card