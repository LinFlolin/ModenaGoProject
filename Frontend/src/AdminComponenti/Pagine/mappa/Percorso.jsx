import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './mappacss/percorso.css'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Percorso extends Component{
  constructor(props){
    super(props)
    this.state = {
        post : []
    }
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/Marker/')
    .then(response=> {
        console.log(response)
        this.setState({post : response.data})
    })
    .catch(error=>{
        console.log(error)
        this.setState({erroeMsg : 'error retreiving data'})
    })

}
  render(){
    const { post } = this.state
    return(
      <div className='percorso'>
        <Container fluid="sm">
          <Row>
            <Col>
            <Carousel>
              {
                post.map(item => (
                  <Carousel.Item key={item.id} className='caritem'>
                    <img src={item.Immagine} className='carimg' alt={item.Nome} />
                    <Carousel.Caption id='itemcar'>
                      <h3>{item.Nome}</h3>
                      <p>{item.Descrizione}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }
            </Carousel>
            
            </Col>
          </Row>
        </Container>
       
      </div>
    )
 
  }
}

