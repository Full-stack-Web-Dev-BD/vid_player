import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import getYouTubeID from 'get-youtube-id'
import './app.css'
import RestoreIcon from '@material-ui/icons/Restore';
import LibraryAddCheckRoundedIcon from '@material-ui/icons/LibraryAddCheckRounded';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100]);
  const [avarageTime, setavarageTime] = useState('')
  const [selected, setselected] = useState('00:00')



  const handleChange = (event, newValue) => {
    var video_duration = localStorage.getItem('video_duration')
    var onePersentInSeconds=video_duration/100
    var valueOne=newValue[0]*onePersentInSeconds
    var valueTwo=newValue[1]*onePersentInSeconds

    var selectedMinute=Math.floor((valueTwo-valueOne) / 60);
    var abc=((valueTwo-valueOne)-selectedMinute*60).toString()
    var selectedSeconds=abc.split('.')[0]
    setValue(newValue);
    setselected(`${selectedMinute}:${selectedSeconds}`)


    
    
    // here just need to set    selected time  ,  avarage time 
    window.localStorage.setItem('valueOne',valueOne)
    window.localStorage.setItem('valueTwo',valueTwo)
    window.localStorage.setItem('update','commit')

    
    setavarageTime()
    console.log(valueOne, valueTwo)
    console.log(localStorage.getItem('update'))
    
  };
  useState(()=>{
    
    window.localStorage.setItem('valueOne',0)
    window.localStorage.setItem('valueTwo',100)
    window.localStorage.setItem('update','commit')

  })
  useEffect(()=>{
    setTimeout(() => {
      var video_duration = localStorage.getItem('video_duration')
      var minute=Math.floor(video_duration / 60);
      var seconds=video_duration-(minute*60)

      setavarageTime(`${minute} : ${seconds}`)
    }, 200);
  })
  const changeHandler=(event)=>{
    var videoID=getYouTubeID(event.target.value)
    window.localStorage.setItem('getVideoID',`${videoID}`)
    window.location.href='/'
  }
  return (
    <div >
      <AppBar position="static" style={{width:'100%'}}>
        <Toolbar style={{width:'100%'}}>
          <div className="col-md-8 offset-md-2 text-center">
            <img style={{maxWidth:'101px'}} src={require('./image/logo.png')}/>
          </div>
        </Toolbar>
      </AppBar>
      <div >
        <div>
          <div className="container">
          <div id="video-placeholder"></div>

            <div className="">
              <div class="row">
                <div class="col-md-12 offset-md-0">
                  <div class="card">
                      <div class="card-content">
                        <div className="col-md-12  d-flex">
                          <input onChange={changeHandler} className="form-control  mb-5" type="text" placeholder="Enter a youtube video link " />
                        </div>
                          <div className="col-md-12  ">
                            <div style={{padding:'164px'}}>
                                <p className="text-center" style={{whiteSpace:'nowrap'}}>Loading ...</p>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                        <div style={{minWidth:'100px'}} className=" text-center">
                          <p><RestoreIcon /></p>
                          <p className="text-center " style={{whiteSpace:'nowrap'}}> {avarageTime} </p>
                        </div>
                        <div style={{minWidth:'100px'}} className=" text-center">
                          <p><LibraryAddCheckRoundedIcon /></p>
                          <p className="text-center " style={{whiteSpace:'nowrap'}}> {selected} </p>
                        </div>
                      </div>
                      <div className="card-action">
                        <div>
                          <Typography id="range-slider" gutterBottom>Select Range </Typography>
                        </div>
                        <Slider
                        value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          getAriaValueText={valuetext}
                        />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}