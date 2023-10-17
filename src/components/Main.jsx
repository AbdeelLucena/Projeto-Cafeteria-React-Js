import {Container,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {
  return (

      <Container>
     
      <div className='cards'>
        <h1>Escolha as mais Diversas opções! </h1>
      <Card  style={{ width: '18rem' }}>
      <Card.Img className="Card-Img" variant="top" src="https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img className="Card-Img" variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img className="Card-Img" variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  </div>

    </Container>
    
  )
}

export default Main