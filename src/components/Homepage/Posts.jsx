import React from 'react'
import SinglePost from './SinglePost'
import {Container} from 'react-bootstrap'

class Posts extends React.Component {

    state= {
        posts: [],
       
    }

  

    fetchPosts = async () => {

        try {
        
            const response = await fetch(
              `https://striveschool-api.herokuapp.com/api/posts/ `,  { headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZmM1OWE4OTBjYzAwMTVjZjA3ZWQiLCJpYXQiOjE2MzM5NDI2MTgsImV4cCI6MTYzNTE1MjIxOH0.Aut8mQArR8IfI07aKxRS8oT9D5L-g1Uz5d36Mdj55L0',
                'Content-type': 'application/json',
    
              }}
            );
      
            const data = await response.json();
      
            console.log("right after the fetch", data);
      
            if (response.ok) {
             
              this.setState({
                posts: data,
              });
              console.log("from the fetch", this.state.posts);
            } else {
              console.log("inside the else of Fetch");
            }
          } catch (e) {
       
            console.log("outside the try block", e);
          }

    }

    
    componentDidMount = async () => {
     
        this.fetchPosts()
       
     }

     componentDidUpdate = async (prevState) => {
         
         if (prevState.posts !== this.state.posts) {
             this.fetchPosts()}
     }
    
    render() {
        const postsToDisplay = this.state.posts.slice(1725)
        console.log(postsToDisplay)
        return (
            <>
            {postsToDisplay.map((p) => 
            <div key={p._id}>
                <SinglePost post={p} />
            </div>)}
            </>
        )
    }
}

export default Posts