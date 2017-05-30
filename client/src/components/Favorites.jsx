import React from 'react';
import FavsListEntry from './FavsListEntry.jsx';
import Nav from './Nav.jsx';
import axios from 'axios';


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [],
      isLoggedIn: this.props.location.state.isLoggedIn
    };
  }

  componentDidMount() {
    var that = this;
    axios.get('/api/favorites')
      .then(function(response) {
        that.setState({colleges: response.data.reverse()});
      }).catch(function(error) {
        console.log(error);
      });
  }

  render() {
    var deleteHandler = function(college) {
      console.log('college has been recieved by the Favorites', college);
      var that = this;
      axios({
        url: '/api/favorites',
        method: 'DELETE',
        data: {collegeId: college.university_id}
      })
    .then((results) => {
      console.log('client for remove favs received this from server ---> ', results.data);
      that.setState({
        colleges: results.data
      });
    })
    .catch((error) => {
      console.log('error deleting a favorite');
    }); 
    };
  
    if (this.state.colleges.length > 0) {
      return (
        <div className="container-fluid-fullwidth">
          <Nav isLoggedIn={this.state.isLoggedIn}/>
            <div>
              <h5><u><b>YOUR FAVORITE UNIVERSITIES</b></u></h5>
              {this.state.colleges.map((college, i) => (<FavsListEntry key={i} college={college} deleteHandler={deleteHandler.bind(this)}/>))}
            </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid-fullwidth">
            <Nav isLoggedIn={this.state.isLoggedIn}/>
          <div>
            <h5><u><b>YOU DO NOT HAVE ANY FAVORITES</b></u></h5>
          </div>
      </div>
      );
    }
  }
}

export default Favorites;