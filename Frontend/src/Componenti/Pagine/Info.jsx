import { Component } from 'react'
import axios from 'axios'

export class Info extends Component{

    constructor(props){
      super(props)
      this.state = {
          postsL : []
      }
  }
  componentDidMount(){
      axios.get('http://127.0.0.1:8000/api/LuoghiAtrazioni/','')
      .then(response=> {
          console.log(response)
          this.setState({postsL : response.data})
      })
      .catch(error=>{
          console.log(error)
          this.setState({erroeMsg : 'error retreiving data'})
      })

  }
  render (){
      const { postsL } = this.state
      return(
        <div>
          {
            <ul>
                {postsL.map(item =>(
                    <li className="container " key={item.id}>
                        Titolo:
                        <be/>
                        {item.Titolo}
                        <br/>
                        Descrizione:
                        <br/>
                        {item.Descrizione}
                        <br/>                         
                    </li>             
                ))}
            </ul>
          }
        </div>
      )
  }
}

