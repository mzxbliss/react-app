import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline';
import Badges from './Badges';
import './index.css';


class Home extends Component {
  render() {
    return (
      <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://media.licdn.com/dms/image/C4D03AQHcirRE6G4B_g/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=E41MYXv0q0wW0O1sBpyrjq8NKmw4vvYSM_JtZjdJVAk" alt=""/>
                        </div>
                        <div className="profile-work" >
                            <p ClassName="col-md-6">Public Profile</p>
                            <p></p>
                            <a className="social" target="_blank" href="https://www.linkedin.com/in/emmatrangnguyen/">Linkedin</a>{" |"}
                            <a className="social" href="https://www.youracclaim.com/user/emma-nguyen">Acclaim</a>{" |"}
                            <a className="social" href="https://www.twitter.com/mzxbliss89">Twitter</a><br/>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Emma Nguyen
                                    </h5>
                                    <h6>
                                        Product Manager
                                    </h6>
                                    <p className="profile-rating">RANKINGS : <span>10/10</span></p>
                            </div>
                            <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Emma Nguyen</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Female</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>E-mail</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>t.emmanguyen@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Location</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Boston, MA</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Products</label>
                                            </div>
                                            <div className="col-md-8">
                                            <ul>
                                                <li>EMR</li>
                                                <li>ICU Scores</li>
                                                <li>Knowledge{" "}Base</li>
                                                <li>CRM</li>
                                                <li>Digital{" "}Credentials</li>
                                                <li>eCommerce</li>
                                                <li>SDK</li>
                                                <li>Blockchain</li>
                                                </ul>
                                                </div>
                                        </div>
                            </div>
                            <div>
                            <div>
                            <label>About Me</label><br/>
                            <div>
                            <p>Passionate sbout building new products, improving processes, and solving people's problems. Love to innovate and shake up the status quo, and will push others on the team to keep up. Innovative, influential, daring, and direct–with a remarkably high tolerance for taking chances. </p>
                            </div>
                            </div>
                                    </div>
                                </div>
                      </div>
                      </div>
              </div>
            </form>
            </div>
    );
  }
}

export default Home;
