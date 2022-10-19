import { faPencil } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Publications = () => {
    return (
        <Container>
            <SectionTitle
                icon={faPencil}
                title="Publications"
                titleLight="Top"
                label="pencil icon"
            />
        </Container>
    );
};

export default Publications;