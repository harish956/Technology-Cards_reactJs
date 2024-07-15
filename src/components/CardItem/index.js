// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {title, description, imgUrl, className} = eachItem
  return (
    <li className={className}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem
