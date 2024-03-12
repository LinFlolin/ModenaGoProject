import {React, useState,useEffect} from 'react'
import '../AdminCss/HomePage.css'
import axios from 'axios'
import { Component } from 'react'
export class HomePage extends Component{
  constructor(props){
    super(props)
    this.state = {
        post : []
    }
 }
 componentDidMount(){
  axios.get('http://127.0.0.1:8000/api/Marker/')
  .then(response=> {
      console.log(response)
      this.setState({post : response.data})
  })
  .catch(error=>{
      console.log(error)
      this.setState({erroeMsg : 'error retreiving data'})
  })

}
  render(){
    const { post } = this.state
    return (
  
      <div className='homesec'>
            <section className='aboutus '>
              <h3>About us </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.s
              </p>
            </section>
            <section className='luogsec'>
              <h3>Luoghi</h3>
              <div className='box'>
                 {
                  post.map(item=>(
                    <section className='luogcart' key={item.id}>
                      <div className='imgbox'>
                        <img src={item.Immagine}/>
                      </div>
                      <h6>{item.Nome}</h6>
                      <p>someTing</p>
                    </section>
                  ))
                 }
              </div>
              
            </section>      
      </div>
    )

  }
  
  

  }
  
