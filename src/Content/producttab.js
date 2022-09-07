import './../style/productContainer.css'
import {Row , Col} from 'react-bootstrap'

import Card from 'react-bootstrap/Card';

import './../App.css'
import { useSelector } from 'react-redux';


function Product() {
    

    const data = useSelector((state)=>{
        
        return state.View
    })

    return ( 
        <>
        
        <div className="cont">
        
        <Row xs={1} md={3} className="g-2">
            {data.map((item, index) => (
                <Col key={index}>
                <Card className='cards'>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" />
                    <Card.Body>
                    {/* <div className='productLabel'>
                        <h3>{item.price}</h3>
                        <h3>/Month</h3>
                        <h2>{item.name}</h2>
                    </div> */}
                    <Row xs={1} md={2} className="g-1">
                    <div className='productLabel'>
                        <Col>
                        <h3 style={{
                            color : "#7065F1"
                        }}>${item.price}</h3>
                        <h3 className="cardslabel">/Month</h3>
                        </Col>
                        <Col>
                        <h3 className='title'>{item.name}</h3>
                        </Col>
                    </div>
                        
                    </Row>

                    <Row className="addressLabel">
                        <h6>{item.address}</h6>
                    </Row>
                    <div className="horizontalLine"></div>
                    
                    <Row>
                        <Col>🛌{item.beds} Beds</Col>
                        <Col>🛁{item.bathrom} Bathroom</Col>
                        <Col>🧱{item.sqft}</Col>
                    </Row>
                    {/* <button onClick={()=>{
                        test(item.name)
                    }}>Click here</button> */}
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
       
        </div>
        </>
     );
}

export default Product;
