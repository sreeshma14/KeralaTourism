import { React, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
function Placeview() {
    var [Allplaces, setPlaces] = useState([])
    const fetchPlace = async () => {
        const result = await fetch('/places.json')
        result.json().then(data => {
            setPlaces(data.places)
        })
    }
    const params = useParams()
    console.log(Allplaces);
    const places = Allplaces.find(item => item.id == params.id)

    useEffect(() => {
        fetchPlace()
    }, [])
    return (
        <>
            {
                places ?
                    (< Row >
                        <Col lg={6} md={6} className=' mt-5  text-center'>
                            <img style={{ height: '500px', width:'500px' }} src={places.photograph} />
                        </Col>
                        <Col lg={6} md={6} className='mt-5 '>
                            <ListGroup>
                                <ListGroup.Item><h1>{places.name}</h1></ListGroup.Item>
                                <ListGroup.Item><p>Disrict :<strpong>{places.district} </strpong></p></ListGroup.Item>
                                <ListGroup.Item><p> About :{places.description} </p></ListGroup.Item>
                                <ListGroup.Item><p>Best time to visit : <strpong>{places.BestTime} </strpong></p></ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </ Row>) : ""

            }
        </>
    )
}

export default Placeview