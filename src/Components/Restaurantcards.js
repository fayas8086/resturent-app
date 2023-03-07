import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Restaurantcards({restaurant}) {
    console.log(restaurant)
  return (
    <
        Link to={`viewrestaurant/${restaurant.id}`}
    >
    <Card className="m-4 ">
      <Card.Img variant="top" className='p-4' src={restaurant.photograph}/>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
            {restaurant.neighborhood}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Link>
  )
}

export default Restaurantcards