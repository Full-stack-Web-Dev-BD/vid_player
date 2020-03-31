import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';
import getYouTubeID from 'get-youtube-id'
import './app.css'
import convert  from'convert-seconds'
import RestoreIcon from '@material-ui/icons/Restore';
import LibraryAddCheckRoundedIcon from '@material-ui/icons/LibraryAddCheckRounded';


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















