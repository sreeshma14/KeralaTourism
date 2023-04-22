import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://icons.veryicon.com/png/o/business/domain-icon/tourism.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                            
                        />{' '}
                        KERALA TOURISM
                        <p>Explore, Journey, Discover, Adventure.</p>
                    </Navbar.Brand>
                </Container>
            </Navbar >


        </div >
    )
}

export default Header