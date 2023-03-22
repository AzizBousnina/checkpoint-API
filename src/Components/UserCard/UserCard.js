import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <div className="userCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src='https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg' />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="warning">
            <Link to={`/user/${user.id}`}>Profile</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;