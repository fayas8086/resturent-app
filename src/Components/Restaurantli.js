import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCards from "./Restaurantcards"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import {RestaurantListAction}from '../Actions/restaurantlistAction'
import{useDispatch,useSelector} from'react-redux'
function Restaurantli() {
  const[allRestaurants,setRestaurants]=useState([])//to fech data from json  array forma
  //function to call api get all restaurant ite from restaurant.json
  const getRestaurants=async()=>{
   await fetch('/restaurants.json')
  .then((data)=>{
    data.json()
    .then((result)=>{
      setRestaurants(result.restaurants)
    })

  })
  }
  const dispatch=useDispatch();
  const result=useSelector(state=>state.restaurantReducer)
    console.log(result)
    const {restaurantList}=result
  useEffect(()=>{
    //getRestaurants()
    dispatch(RestaurantListAction())
  },[])
  return (
    <Row>{
      allRestaurants.map(item=>(
      
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestaurantCards restaurant={item}/></Col>
        )
      )
      }
      </Row>
  )
}

export default Restaurantli
