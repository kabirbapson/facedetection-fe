import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';


// import Particles from 'react-particles-js';
const initialState = {
  input: '',
  imageURL: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      }
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3002')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input })
      .then(response => {
        if (response) {
          fetch('http://localhost:3002/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {
                entries: count
              }))
            })
        }
      })

    console.log('click')
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }
  render() {
    return (
      <div className="App">

        {/* <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
            /> */}


        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
          ? <div>
            <Logo />
            {/* <Rank /> */}
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImgLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageURL={this.state.imageURL} />
          </div>
          : (
            this.state.route === 'signin'
              ? < Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              // ? <Signin onRouteChange={this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }

      </div>
    );
  }
}

export default App;
