import Container from 'react-bootstrap/Container';
import {Row , Col , Button , DropdownButton ,Dropdown} from 'react-bootstrap'
import './../style/main.css'
import Data from './productData';
import {  useDispatch } from 'react-redux';
import { View , liveView, resettab } from '../action/action';
import React from 'react';



function Filterlayout() {


    
    //To send Data
    const dispatch = useDispatch()

    //For live Search Bar to show as we start typing

    const [livesearch , setlivesearch] = React.useState('')

    dispatch(liveView({
        live : livesearch
    }))


    //For Dropdown City
    //to avoid duplication
    let uniqueChars=[]
    
    let city = []
    for(let i of Data){
        city.push(i.city)
        
    }
        
    uniqueChars = [...new Set(city)];

    const [selected, setSelected] = React.useState(uniqueChars[0])
    
    let dropdownClicked=selected
    let propertyTypeClicked

    // For DropDown Over


    //For Dropdown Country
    //to avoid duplication
    let propertyTypes=[]
    
    
    for(let i of Data){
        propertyTypes.push(i.propertyType.toLowerCase())
        
    }
        
    propertyTypes = [...new Set(propertyTypes)];

    const [selectedpropertyType, setpropertyType] = React.useState(propertyTypes[0])
    
    propertyTypeClicked=selectedpropertyType



    //for Price Range


    const [minprice , setminPrice] =React.useState('')
    const [maxprice , setmaxPrice] =React.useState('')


    //for Move Date

    const [dates , setDate] = React.useState()

    // For Submit
    const onsubmit = ()=>{
        console.log(minprice.length)
        if(minprice.length===0){
            
            
            return(
                alert("Min Price Is Empty")
            )
        }

        if(maxprice.length===0){
            
            
            return(
                alert("Max Price Is Empty")
            )
        }

        if(dates===undefined){
            
            
            return(
                alert("Please Select Dates")
            )
        }
        //Sending Data to reducer
        dispatch(View({
            name : dropdownClicked,
            propertyType : propertyTypeClicked,
            minprice : minprice,
            maxprice : maxprice,
            movingdate : dates,

        }))
    }
    

    return ( 
        <>
           
            <Container className='filterContainer' fluid="md">
                <Row>
                    <Col className='textSize' sm={6}>Search Properties For Rent</Col>
                    <Col sm={6}>
                    <input value={livesearch} onChange={(e)=>{
                        setlivesearch(e.target.value)
                    }} className='inputs' type={'text'} placeholder={"Search With SearchBar"}
                    ></input>
                    </Col>
                </Row>
            </Container>
            <div className='filters'>
              
                <Row>
                    <Col>
                        <div className='filterLine'>
                        <h3> Location</h3>
                        <DropdownButton id="dropdown-item-button" title={dropdownClicked}>
                            {uniqueChars.map((item,index)=>{
                                return(
                                    <div key={index}>
                                    <Dropdown.Item

                                     onClick={()=>{
                                        setSelected(item)
                                        
                                        
                                    }} as="button">{item}</Dropdown.Item>
                                    </div>
                                )
                            })}
                            
                            {/* <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item> */}
                        </DropdownButton>
                         </div>
                    </Col>

                    <Col>
                        <div className='filterLine'>
                        <span><h4>When</h4>
                        <h5>Select Date</h5></span>
                        
                        <input
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}
                         type="date"
                          id="birthday"
                           name="birthday"/>
                        </div>
                    </Col>

                    <Col>
                    <div className='filterLine'>
                        <h3>Price</h3>
                        {/* <h5>$500-$2000</h5> */}
                        <div style={{
                            display : "flex",
                            justifyContent : "center",
                        }}>
                        <h3>$</h3>
                        <input style={{
                            width : "50px",
                            height : "40px",
                            borderRadius : "10px",
                        }}
                        
                        onChange={(e)=>{
                            setminPrice(e.target.value)
                        }}
                        
                         type={'text'}/>
                        <h3>To</h3>
                        <input style={{
                            width : "50px",
                            borderRadius : "10px",
                        }}
                        onChange={(e)=>{
                            setmaxPrice(e.target.value)
                        }}
                         type={'text'}/>
                            
                        </div>
                        
                    </div>
                    </Col>
                    <Col>
                    <div className='filterLine'>
                        <h3>Property Type</h3>
                        {/* <h5>House</h5> */}

                        <DropdownButton id="dropdown-item-button" title={propertyTypeClicked}>
                            {propertyTypes.map((item,index)=>{
                                return(
                                    <div key={index}>
                                    <Dropdown.Item

                                     onClick={()=>{
                                        setpropertyType(item)
                                        
                                        
                                    }} as="button">{item}</Dropdown.Item>
                                    </div>
                                )
                            })}
                            
                            {/* <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item> */}
                        </DropdownButton>

                        </div>
                    </Col>

                    <Col>
                    
                        <Button style={{
                            marginTop : "20px",
                        }} onClick={onsubmit}>Submit</Button><br/>
                        <Button style={{
                            marginTop : "20px",
                        }} onClick={()=>{
                            setlivesearch('')
                            dispatch(resettab({
                                
                                dummy: "do it"
                            }))
                        }}>Reset</Button>
                    </Col>
                </Row>
            </div>
            <hr/>

        </>
     );
}

export default Filterlayout;