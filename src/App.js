import React, { Component } from 'react'


class App extends Component {
  
  state={
    startTime:'10',
    endTime:'20',
    link:'https://www.youtube.com/embed/MqNd1xD46VY'
  }
  changeHandler=(event)=>{
    this.setState({link:event.target.value})
  }
  render(){
    return (
      <div>
      <nav>
        <div class="nav-wrapper">
          <div class="container">
            <ul id="nav-mobile" class="text-center hide-on-med-and-down">
              <li><a href="" class="text-center">Video Play</a></li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container">
          <div className=" mt-5">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="card">
                    <div class="card-content">
                      <div className="col-md-10 offset-md-1 d-flex">
                        <input onChange={this.changeHandler} className="form-control  mb-5" type="text" placeholder="Enter a link " />
                      </div>
                      <div style={{textAlign: 'center'}}>
                        <div style={{display:'inline-block'}}>
                          <iframe width="560" height="315" src={`${this.state.link}?&start=${this.state.startTime}&end=${this.state.endTime}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="card-action">
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App



// https://youtu.be/-u5cUuC6jNo