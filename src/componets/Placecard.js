import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Placecard({ placedata }) {
    return (
        <>
            <Link style={{textDecoration:'none', color:'white'}} to={`view-places/${placedata.id}`}>
                <Card className='text-center' style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={placedata.photograph} />
                    <Card.Body>
                        <Card.Title className='text-success  ' >{placedata.name}</Card.Title>
                        <Card.Text>
                            <p>District :{placedata.district} </p>
                            <p>Best time :{placedata.BestTime} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default Placecard