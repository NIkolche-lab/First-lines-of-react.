import React, { Component } from 'react'
import axios from 'axios';

export default class post extends Component {
    state = {

        post: {},
        photo: ""
    }
    componentDidMount() {
        axios('https://jsonplaceholder.typicode.com/posts/1').then (({data}) => {
        this.setState({
            post: data
        })
    })
    axios('https://jsonplaceholder.typicode.com/photos/1').then(({data}) => {
        this.setState({
            photo: data,
        })
    })
    }

    render() {
        const {post, photo} = this.state;
        return (
            <div>
                <img src = {photo.thumbnailUrl} alt ="somepic"></img>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    }
}