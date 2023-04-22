import { React, useEffect, useState } from 'react'
import Placecard from './Placecard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Places() {

    var [placeList, setPlaces] = useState([])

    const fetchData = async () => {
        const result = await fetch('/places.json')
        result.json().then(item => {
            setPlaces(item.places)
        })
    }

    console.log(placeList);
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Row>
            {
                placeList.map(item => (
                    <Col className=' p-5' lg={4} md={6}>
                        <Placecard placedata={item} >   </Placecard>
                    </Col>

                ))
            }
        </Row>
    )
}

export default Places