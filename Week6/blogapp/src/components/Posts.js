import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        return [
            new Post(1, "First Post", "This is the body of the first post"),
            new Post(2, "Second Post", "This is the body of the second post"),
            new Post(3, "Third Post", "This is the body of the third post")
        ];
    }

    componentDidMount() {
        const posts = this.loadPosts();
        this.setState({ posts });
    }

    componentDidCatch(error, info) {
        console.error("Error occurred in Posts component:", error, info);
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                {this.state.posts.length > 0 ? (
                    this.state.posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading posts...</p>
                )}
            </div>
        );
    }
}

export { Posts };
