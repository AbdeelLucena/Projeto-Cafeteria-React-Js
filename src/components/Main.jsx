import {Container,Card,Button,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {
  return (

      <Container>
          <div className="container">
            <h1 className="mt-5 text-center" >Menu  &#128523;</h1>

            <div className="text-right">
              <button type="button" className="btn btn-secondary rounded-circle mr-4 font-weight-bold" id="newBtnFood" data-toggle="modal" data-target="#formFoodModal" onClick="loadFormCreateFood()">
                +
              </button>
            </div>
    </div>
      
     
      <div className='cards'>
        <h1>Escolha as mais Diversas opções! </h1>
      <Card  style={{ width: '18rem' }}>
      <Card.Img className="Card-Img" variant="top" src="https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>Café</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.estadao.com.br/resizer/822RDdWyYCCc6P6anTCJC6ON_Zg=/720x503/filters:format(jpg):quality(80):focal(753x818:763x828)/cloudfront-us-east-1.images.arcpublishing.com/estadao/2Z3ZSSS27BAJ3CKSYRGUTAGC6Y.jpg" />
    <Card.Body>
      <Card.Title>Tapioca!</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">comprar</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img className="Card-Img" variant="top" src="https://msidastjoseph.com/wp-content/uploads/2023/06/8372-Black-Magic-Cake-ddmfs-4x3-1131.jpg" />
    <Card.Body>
      <Card.Title>cake</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">comprar</Button>
    </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img className="Card-Img" variant="top" src="https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/01/18/1378224776-aprenda-como-fazer-receita-de-capuccino-caseiro-fonte-we-heart-it-500x500.jpg" />
    <Card.Body>
      <Card.Title>cappuccino</Card.Title>
      <Card.Text>
      
      </Card.Text>
      <Button variant="primary">comprar</Button>
    </Card.Body>
    </Card>
  </div>

    </Container>
    
  )
}

export default Main