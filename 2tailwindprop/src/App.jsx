import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {


  // let pnager = {
  //   username : "jatin",
  //   passward : 12

  // }
  return (
   <div style={{display:"flex" , gap:"10px" , margin:"10px"}}>
      <Card heading = "Aaksh" about = "This is my one Card" />
     <Card heading = "Anshul" about = "This is my two Card "/>
     <Card heading = "Jatin" about = "This is my two Card "/>
     <Card heading = "Ritash" about = "This is my two Card " buttonjp ="click"/>
   </div>
  )
}

export default App
