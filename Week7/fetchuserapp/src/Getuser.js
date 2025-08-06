import React, { Component } from 'react';

class Getuser extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
        };
    }


async componentDidMount() {
    try {
        const response = await fetch('https://api.randomuser.me/');
        const data = await response.json();
        const userData = data.results[0];
        this.setState({user: userData});
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

render() {
    const { user } = this.state;
    
    return (
        <div style={{ textAlign: 'center', marginTop: '30px'}}>
            {user ? (
                <div>
                    <h3>{`${user.name.title} ${user.name.first}`}</h3>
                    <img src={user.picture.large} alt="User" />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
}
export default Getuser;
