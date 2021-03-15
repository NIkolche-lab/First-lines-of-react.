import React, {
    Component
} from 'react'
import axios from 'axios'

export default class Quotes extends Component {
    state = {
        quotes: []
    }
    componentDidMount() {
        axios("https://type.fit/api/quotes").then(({
            data
        }) => {
            this.setState({
                quotes: data
            })
        })
        
    }  
        
    
        render() {
           

            return ( 
                <div>
                  <h1>Quotes</h1>
                  {
                      this.state.quotes == 0 ? 'use this quote' : this.state.quotes.map(quote => (
                           <div>
                          <h2> {quote.text}</h2> 
                    
                          <p>{quote.author}</p>
                          </div>
                      ))
                  }
                
                </div>
            )
        }
    }