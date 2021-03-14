import React, { Component } from 'react'
import axios from 'axios'
export default class Blogpost extends Component {
    state = {
        post : "",
        image : ""
    }
    componentDidMount() {
        axios('https://jsonplaceholder.typicode.com/posts/1')
        .then(data => {
            console.log(data.title)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
