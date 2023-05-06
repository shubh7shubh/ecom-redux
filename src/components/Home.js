import React from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import "../App.css"

const Home = () => {
  return (
    <section>
{/* //     <section>
// <Container fluid className ='mt-5 bg-light'>
//   <Row>
//     <Col sm='2'lg='6'md='6' className= 'd-flex flex-column justify-content-center align-items-center'>
//     <div className="coumn_oen"></div>
//     <p className='align-self-start mx-5'>WELCOME TO</p>
//     <h1 className='align-self-start mx-5'>E-ZONE</h1>
//     <p className='align-self-start mx-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium magni quaerat quod beatae, consequuntur qui dolor, libero unde expedita harum eaque repellat? Rem incidunt, ab possimus dolores nisi architecto deleniti!</p>
//     <Button className='align-self-start mx-5' variant="primary">Primary</Button>
//      </Col>
//     <Col sm='2' lg='6'md='6'>
//   <Image fluid style={{height:'300px'}} className='my-5' src='/hero.jpg' ></Image>
//     </Col>
//   </Row>
// </Container>
<Container fluid className ='mt-5 bg-light'> */}
  {/* <Row> */}
    {/* <Col sm='2'lg='6'md='6' className= 'd-flex flex-column justify-content-center align-items-center'> */}
    <Container fluid className ='mt-5 bg-light d-flex flex-row justify-content-center align-items-center '>
    <div className="coumn_one w-50">
    <p className='align-self-start mx-5 textWhite'>WELCOME TO</p>
    <h1 className='align-self-start mx-5'>E-ZONE</h1>
    <p className='align-self-start mx-5'>The term "E-zone," which stands for "electronic zone," refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.</p>
    <Button className='align-self-start mx-5' variant="primary">Primary</Button>
    </div>
<div   className="column_two">
<Image style={{height:'250px'}}fluid  className='my-5' src='/hero.jpg' ></Image>
</div>
</Container>
</section>

  )
}

export default Home
