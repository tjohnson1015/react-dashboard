import { useEffect, useState } from "react"
import { Col, Row, Table } from "react-bootstrap"
import User from './User'


function UserList() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => setUsers(data.results))
    }, [])

    return (
        <div>
            <Row>
                <Col lg={8}>
                <Table striped bordered>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>Country</th>
                    </tr>
                </thead>
                </Table>
                {users.map((user, i) => {
                    return <User key={i} user={user} />
                    })
                }
                </Col>
            </Row>
        </div>
    )
}

export default UserList;

