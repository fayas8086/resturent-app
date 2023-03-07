import React ,{useState,useEffect}from 'react'
import {useParams} from 'react-router-dom'
function Viewrestaurant() {
  const params=useParams()
  console.log(params.id)
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
  console.log(allRestaurants)
  useEffect(()=>{
    getRestaurants()
  },[])
  console.log(allRestaurants)
  const viewrest = allRestaurants.find(item=>item.id==params.id)
  console.log(viewrest)
  return (
    <>
    </>
  )
}

export default Viewrestaurant