import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';

import getYouTubeID from 'get-youtube-id'

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
  const [link, setlink] = useState('https://www.youtube.com/embed/MqNd1xD46VY')

  const handleChange = (event, newValue) => {
    var video_duration = localStorage.getItem('video_duration')
    // console.log(event.target.value)
    var onePersentInSeconds=video_duration/100
    console.log(newValue)
    // newValue=[1, 100]
    var valueOne=newValue[0]*onePersentInSeconds
    var valueTwo=newValue[1]*onePersentInSeconds
    setValue(newValue);
    
    window.localStorage.setItem('valueOne',valueOne)
    window.localStorage.setItem('valueTwo',valueTwo)
    window.localStorage.setItem('update','commit')
    
    console.log(valueOne, valueTwo)
    console.log(localStorage.getItem('update'))
    
  };
  useState(()=>{
    
    window.localStorage.setItem('valueOne',0)
    window.localStorage.setItem('valueTwo',100)
    window.localStorage.setItem('update','commit')

  })
  const show=(event)=>{
    console.log(localStorage.getItem('video_duration'))
  }
  const changeHandler=(event)=>{
    var videoID=getYouTubeID(event.target.value)
    window.localStorage.setItem('getVideoID',`${videoID}`)
    window.location.href='/'
  }
  return (
    <div >
      
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
                        {/* <div style={{textAlign: 'center'}}>
                          <div style={{display:'inline-block'}}>
                            <iframe title="YouTube Video" id="video_content" width="560" height="315" src={`${link}?&start=${value[0]}&end=${value[1]}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                        </div> */}
                      </div>
                      <div class="card-action">
                        <Typography id="range-slider" gutterBottom>Select Range </Typography>
                        <Slider
                        value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                          getAriaValueText={valuetext}
                        />
                      </div>
                      <button onClick={show} className="btn">show</button>
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



      


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
// import { useState } from 'react';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300 + theme.spacing(3) * 3,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));
// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }
// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };
// const AirbnbSlider = withStyles({
//   root: {
//     color: '#3a8589',
//     height: 3,
//     padding: '13px 0',
//   },
//   thumb: {
//     height: 27,
//     width: 27,
//     backgroundColor: '#fff',
//     border: '1px solid currentColor',
//     marginTop: -12,
//     marginLeft: -13,
//     boxShadow: '#ebebeb 0px 2px 2px',
//     '&:focus, &:hover, &$active': {
//       boxShadow: '#ccc 0px 2px 3px 1px',
//     },
//     '& .bar': {
//       // display: inline-block !important;
//       height: 9,
//       width: 1,
//       backgroundColor: 'currentColor',
//       marginLeft: 1,
//       marginRight: 1,
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: 'calc(-50% + 4px)',
//   },
//   track: {
//     height: 3,
//   },
//   rail: {
//     color: '#d8d8d8',
//     opacity: 1,
//     height: 3,
//   },
// })(Slider);
// function AirbnbThumbComponent(props) {
//   return (
//     <span {...props}>
//       <span className="bar" />
//       <span className="bar" />
//       <span className="bar" />
//     </span>
//   );
// }

// export default function App() {
//   const classes = useStyles();
//   const [link, setlink] = useState('https://www.youtube.com/embed/MqNd1xD46VY')
//   const [startTime, setstartTime] = useState('10')
//   const [endTime, setendTime] = useState('20')

//   const changeHandler=(event)=>{
//     setlink(event.target.value)
//   }
//   const changeValue=(event)=>{
//     console.log(event)
//   }
// //   return (
//     <div >
//       <div>
//       <nav>
//         <div class="nav-wrapper">
//           <div class="container">
//             <ul id="nav-mobile" class="text-center hide-on-med-and-down">
//               <li><a href="" class="text-center">Video Play</a></li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//         <div className="container">
//           <div className=" mt-5">
//             <div class="row">
//               <div class="col-md-10 offset-md-1">
//                 <div class="card">
//                     <div class="card-content">
//                       <div className="col-md-10 offset-md-1 d-flex">
//                         <input onChange={changeHandler} className="form-control  mb-5" type="text" placeholder="Enter a link " />
//                       </div>
//                       <div style={{textAlign: 'center'}}>
//                         <div style={{display:'inline-block'}}>
//                           <iframe width="560" height="315" src={`${link}?&start=${startTime}&end=${endTime}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="card-action">
//                       <Typography gutterBottom>Airbnb</Typography>
//                       <AirbnbSlider
//                         ThumbComponent={AirbnbThumbComponent}
//                         getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
//                         defaultValue={[20, 80]}
//                         onChange={changeValue}
//                       />
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















