import React from 'react';
import { Container } from 'react-bootstrap';
import mbstuBanner from '../../images/mbstu-banner-1.jpg'

const Titlebar = () => {
    return (
        <Container fluid className="d-none d-lg-block">
            <img  width="100%" src={mbstuBanner} alt="university name and logo" />
        </Container>
    );
};

export default Titlebar;