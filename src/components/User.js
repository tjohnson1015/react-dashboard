import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, ListGroup, Row, Table } from 'react-bootstrap'
import UserList from './UserList'

function User(props) {
    const { picture, name, login, registered, location, email } = props.user
    // const formattedDate = new Date(registered)

    return (
    // <div>
        <Table bordered>
            <tbody>
                <tr>
                <td>{name.first} {name.last}</td>
                <td>{login.username}</td>
                <td>{email}</td>
                <td>{registered.date}</td>
                <td>{location.country}</td>
                </tr>
            </tbody>
        </Table>
    // </div>
    )
}

User.propTypes = {
    user: PropTypes.object
}

export default User