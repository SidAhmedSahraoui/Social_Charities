import React from 'react';
import Requests from './requests';
import Sidebar from '../../layout/Sidebar/Sidebar'
import './pending.css'
import { Container } from 'react-bootstrap';
const Pending = () => {

    return (
        <Container>
            <Sidebar />
            <Requests />

        </Container>
    )
}

export default Pending ;