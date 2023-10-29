import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
      <img
          src="https://cdn1.c1rca.com.ar/shop/18473-home_default/otono-hoodie-bordo-.jpg"
          alt="Producto 1"
        />    
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <img
          src="https://cdn3.c1rca.com.ar/shop/18625-home_default/tag-zip-hoodie-negro-.jpg"
          alt="Producto 2"
        />    
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <img
          src="https://cdn3.c1rca.com.ar/shop/18030-home_default/icon-raglan-hoodie-verde.jpg"
          alt="Producto 3"
        />    
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>



      




    </div>
  );
}

export default CardExample;