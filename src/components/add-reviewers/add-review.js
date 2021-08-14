import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux';

// APIs
import {USER_API, COMMENT_API} from '../../api';


const AddReviewer = ({document}) => {
    
    const user = useSelector(state => state.user)
    const [allUsers, setAllUsers] = useState([])
    const [selectedReviewer, setSelectedReview] = useState("")

    useEffect(() => {
        USER_API.getAllUser(user.token).then(data => setAllUsers(data.data))
    },[user.token])

    const handleSelect = (event) => {
        setSelectedReview(event)
    }

    const handleAddReviewerOnClick = (event) => {
        event.preventDefault()
        COMMENT_API.postReviewer({
            documentID: document.fileID,
            userEmail: selectedReviewer
        })
    }

    return (
        <Container>
            <hr/>
            <Row>
                <Col>
                    <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selectedReviewer === "" ? "Reviewers" : selectedReviewer}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {allUsers.map(user => {
                                return (
                                    <Dropdown.Item eventKey={user.email}>{user.email}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col><Button onClick={handleAddReviewerOnClick}>Add Reviewer</Button></Col>
            </Row>
        </Container>
    )
}

export default AddReviewer;