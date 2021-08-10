import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux';

// APIs
import {USER_API} from '../../api'


const AddReviewer = ({document}) => {
    
    const user = useSelector(state => state.user)
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        USER_API.getAllUser(user.token).then(data => setAllUsers(data))
    },[user.token])

    console.log(allUsers)
    return (
        <Container>
            <hr/>
            <Row>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Reviewers
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="1">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col><Button>Add Reviewer</Button></Col>
            </Row>
        </Container>
    )
}

export default AddReviewer;