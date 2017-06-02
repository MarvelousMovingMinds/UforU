import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className="card">
          <div className="row" className="bio">
            <h6><b><u>ABOUT THE CREATORS</u></b></h6>
            <div className="col-md-4">
            <img src="images/farrah_bousetta.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="FARRAH PHOTO HERE"/>
            </div>
            <div className="col-md-4">
            <img src="images/arseniy_kotov.png" className="img-responsive bioImages" style={{ height: 200, width: 200}} alt="ARSENIY PHOTO HERE"/>
            </div>
            <div className="col-md-4">
            <img src="images/helen_tang.png" className="img-responsive bioImages" style={{ height: 200, width: 200 }} alt="HELEN PHOTO HERE"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>Farrah Bousetta is an up and comming software engineer with previous work experience at top companies such as Facebook, Google and more.</p>
            </div>
            <div className="col-md-4">
              <p>Arseniy Kotov is an all-star professional Full Stack Software Engineer.</p>
            </div>
            <div className="col-md-4">
              <p>Lorem ipsum</p>
            </div>
          </div>
         </div>
    );
  }
}
export default About;