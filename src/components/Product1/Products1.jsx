import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import  {Link}  from 'react-router-dom';
import './Products1.css'
import Rating from '../Rating/Rating';

function Product1(props) {
  const { product } = props;
  return (
    <Card className="product">
      <Link to={`/product/${product.categoryName}`}>
        <img src={product.offerThumbnail} alt={product.offerName}/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.categoryName}`}>
          <Card.Title className='title-small'>{product.offerName}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button className='btn-primary' href={product.offerLink}>Ver Oferta</Button>
      </Card.Body>
    </Card>
  );
}

export default Product1;
