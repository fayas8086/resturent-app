import React from 'react'
import Container from 'react-bootstrap/container'
import Navbar from 'react-bootstrap/Navbar'





function Headers() {
  return (
    <div>
        <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.lJ2OjMJTvyGkut3KwJjfLgHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
             Platter Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headers