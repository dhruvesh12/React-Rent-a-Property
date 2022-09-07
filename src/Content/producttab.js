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
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.address}<br/>
                        {item.city}<br/>
                        {item.price}<br/>
                    </Card.Text>

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
