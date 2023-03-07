import React from 'react'
import Button from'react-bootstrap/Button'
import Card from'react-bootstrap/Card'
function footer() {
  return (
    <div>
      <div className=" justify-content:center">
         <Card className="text-center">
      <Card.Header>About</Card.Header>
      <Card.Body>
        <Card.Title>Quick</Card.Title>
        <Card.Text>
          Vazhakkala, Ernakulam <br></br>
          Kodungallur , Thrissur
          <br></br>Opening 24*7
        </Card.Text>
        <Button variant="primary">More Links</Button>
      </Card.Body>
      <Card.Footer className="text-muted">All Rights Reserved To Platter </Card.Footer>
    </Card>
    </div>
    </div>
  )
}

export default footer