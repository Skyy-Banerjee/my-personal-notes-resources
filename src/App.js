import './App.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <h2>App Component</h2>
      {/* <div> */}
        {/* <Button variant="contained" color="error" size="small">
          Contained
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <Button color="secondary" variant="outlined">
          Outlined
        </Button>
        <IconButton variant="outlined" color="secondary">
          <AlarmIcon />
        </IconButton>
      </div>
	  <RatingDemo/> */}
	  <NavBar/>
	  <FormDemo/>
	  
    </div>
  );
}

export default App;
