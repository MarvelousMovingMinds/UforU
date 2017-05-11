import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Survey from './components/Survey.jsx';
import Results from './components/Results.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: []
    },

    this.sendSurveyInfo = this.sendSurveyInfo.bind(this);
    
    
  }

  sendSurveyInfo(userData) {
    console.log('axios data:', userData);
    axios({
      url: '/api/colleges/suggestions',
      method: 'POST',
      data: userData,
    })
      .then ((results) => {
        this.setState({
          colleges: results.data
        });
        console.log('axios results: ', results);
      })
      .catch ((error) => {
        console.log(error);
      });
  }

 
  render() {
    return (
      <div className="container-fluid">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">UforU</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#">Schools</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" role="button">Settings <span className="caret"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav >
          <div className="container-fluid" id="banner">
            <div className="row">
              <div className="col-md-12">
                <img className="img-responsive center-block" id="logo" src="uforu_option1.png" alt="UFORUHERE"/>
              </div>
            </div>
          </div>
        <hr></hr>
        <div className="container-fluid">
          <Survey sendSurveyInfo = {this.sendSurveyInfo}/>
        </div>
        <div className="container-fluid">
          <Results colleges = {this.state.colleges}/>
        </div>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <img src="farrah_bousetta.png" className="img-responsive img-circle" style={{ height: 200, width: 350 }} alt="FARRAH PHOTO HERE"/>
            </div>
            <div className="col-md-3">
              <img src="LinkedInPhoto.png" className="img-responsive img-circle" style={{ height: 200, width: 350}} alt="ARSENIY PHOTO HERE"/>
            </div>
            <div className="col-md-3">
              <img src="helen_tang.png" className="img-responsive img-circle" style={{ height: 200, width: 350 }} alt="HELEN PHOTO HERE"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>Farrah Bousetta is an upcoming professional software engineer with previous experience at Facebook, Google and other prestegious tech companies. She gets stuff done. Her nickame is Feisty Farrah</p>
            </div>
            <div className="col-md-3">
              <p>Arseniy Kotov is an all start programmer specializing in full stack developement</p>
            </div>
            <div className="col-md-3">
              <p>Helen is an all around rockstar. She specializes in making the front end of the application look apsolutely amazing along with making her componenets incredibly responsive</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));