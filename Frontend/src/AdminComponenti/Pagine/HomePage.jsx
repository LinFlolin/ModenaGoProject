import {React,Component} from 'react'
import axios from 'axios'
import {AboutUs} from './index'
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
  
      <div>
            <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria rounded-md '>
              <h3 className='fon'>
                About us
               </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, enim cupiditate! Earum consequuntur similique quos dicta veniam assumenda, dolor omnis perferendis reprehenderit, quod rerum necessitatibus. Nobis magnam ab accusamus nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim quod voluptate est quidem magni, odit cupiditate esse saepe iure ullam perferendis officia, a facilis, labore animi ea mollitia omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, laborum illum ratione tempore ipsam repudiandae sit facilis neque corrupti architecto natus quae dolorum voluptas omnis mollitia officiis, delectus nulla ad.s
              </p>
            </section>
            <section className='flex flex-col m-10 p-3 gap-2 items-center bg-secondaria'>
              <h1 className='text-2xl font-semibold'>
                Luoghi
              </h1>
              <div className='flex flex-wrap justify-evenly space-x-3 gap-4 pb-3 m-4'>
                 {
                  post.map(item=>(
                    <section className='m-4 w-52  bg-orange-100' 
                    key={item.id}>
                      <div className='h-40 rounded bg-slate-400 '>
                        <img src={item.Immagine} className='max-w-fit'/>
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
  
