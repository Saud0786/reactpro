import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return(
    <div className='main'>

    <Header/>
    {/* <div className="card1">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
    </div> */}

   
     <Container>
      <Row>
        <Col className='col-12 text-center'>
         <h1> Our Courses</h1>
        </Col>
      </Row>
      
     </Container>
    
   
    <Footer/>

    </div>
  );
}

export default App;

function Card(){
  return(
    <div className='cardItems'>
      Card div
    </div>
    
  )
}