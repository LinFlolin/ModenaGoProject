import React, { Component } from "react";
import axios from 'axios'

export class GetData extends Component{

    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/')
        .then(response=> {
            console.log(response)
            this.setState({posts : response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({erroeMsg : 'error retreiving data'})
        })
    
    }
    render (){
        const { posts } = this.state
        return(
            <div>
                {
                 <ul>
                    {posts.map(item =>(
                        <div className="container " key={item.id}>
                            <li >
                             {item.Titolo}
                            </li>

                        </div>
                        
                    ))}
                 </ul>
                    
                    
                }
            </div>
        )
    }
}
