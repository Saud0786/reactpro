import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Middle from './Middle';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import { blog } from './Data/Blog';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faSearch} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {
  

  let headerInfo={
    email:"saud@gmail.com",
    mobile:"7655445678"
  }
  let[pStatus,setPstatus]=useState(false);

  return(
    <div className='App'>
 
    <Header headerInfo={headerInfo}>

      <h1>Welcome in this world</h1>
     <FontAwesomeIcon icon={faWhatsapp}/>
     <FontAwesomeIcon icon={faPhone}/>
     <FontAwesomeIcon icon={faSearch}/>
     {/* step -1 to add image
     <img src="https://tse3.mm.bing.net/th?id=OIP.o0-_5Yz2Vr32GtIPXUKTLQHaEo&pid=Api&P=0&h=180" alt=""/> */}
     
    </Header>

   

    {/* <div className="card1">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
    </div> */}

{/* <Container fluid>
     <Container>
      <Row>
        <Col className='col-12 text-center'>
         <h1> Our Courses</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="6">
                  <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
        </Col>
        <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </Col>
        <Col lg="3" md="6">
                <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
       </Col>
        <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </Col>
      </Row>
     </Container>
   </Container> */}
   
   <Container>
    <Row>
    {/* {blog.map((v,i)=>{
      return(
        <ProductIteam pitem={v} key={i}/>
      )
    })
  } */}

    <div className='d-flex m-3'>
    <input className='p-2 me-2' type={pStatus?'text':'password'}/> 
    <button onClick={()=>setPstatus(!pStatus)}>{pStatus?'Hide':'Show'}</button>
    </div>


    </Row>
    
   </Container>
    <Footer/>



    <Middle/>

    </div>
  );
}

export default App;

function ProductIteam({pitem}){
  return(
    <div  className="mb-3 col-lg-3 col-md-6">
    <Card >
    <Card.Body>
    <Card.Title>{pitem.title}</Card.Title>
    <Card.Text>
    {pitem.body}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  )
}