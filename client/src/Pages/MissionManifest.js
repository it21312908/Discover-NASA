// import React, { useState } from 'react';

// const API_KEY = 'DEMO_KEY'; // Your NASA API key

// function App() {
//   const [rover, setRover] = useState('');
//   const [sol, setSol] = useState('');
//   const [manifestData, setManifestData] = useState(null);
//   const [error, setError] = useState('');

//   const fetchManifest = async () => {
//     try {
//       const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch manifest');
//       }
//       const data = await response.json();
//       setManifestData(data.photo_manifest);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching manifest:', error);
//       setError('Failed to fetch manifest. Please make sure the rover name is correct and try again.');
//     }
//   };

//   const handleChange = (event) => {
//     setRover(event.target.value);
//   };

//   const handleSolChange = (event) => {
//     setSol(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchManifest();
//   };

//   return (
//     <div>
//       <h1>Mars Rover Manifest</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select a rover:
//           <select value={rover} onChange={handleChange}>
//             <option value="">Select Rover</option>
//             <option value="curiosity">Curiosity</option>
//             <option value="opportunity">Opportunity</option>
//             <option value="spirit">Spirit</option>
//           </select>
//         </label>
//         <label>
//           Enter a sol number:
//           <input type="text" value={sol} onChange={handleSolChange} />
//         </label>
//         <button type="submit" disabled={!rover}>Fetch Manifest</button>
//       </form>
//       {error && <p>{error}</p>}
//       {manifestData && (
//         <div>
//           <h2>Manifest for {manifestData.name}</h2>
//           <p>Landing Date: {manifestData.landing_date}</p>
//           <p>Launch Date: {manifestData.launch_date}</p>
//           <p>Status: {manifestData.status}</p>
//           <p>Most Recent Martian Sol: {manifestData.max_sol}</p>
//           <p>Most Recent Earth Date: {manifestData.max_date}</p>
//           <p>Total Photos: {manifestData.total_photos}</p>
//           {manifestData.photos && manifestData.photos.length > 0 ? (
//             <div>
//               <h3>Photos by Sol:</h3>
//               <ul>
//                 {sol ? (
//                   manifestData.photos.filter((photo) => photo.sol === parseInt(sol, 10)).map((photo) => (
//                     <li key={photo.sol}>
//                       Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
//                     </li>
//                   ))
//                 ) : (
//                   manifestData.photos.map((photo) => (
//                     <li key={photo.sol}>
//                       Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           ) : (
//             <p>No photos available for the selected rover.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import useStyles from '../stylesheet/ManifestStyle'; // Import the styles file
// import { Container, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

// const API_KEY = 'DEMO_KEY'; // Your NASA API key

// function App() {
//   const classes = useStyles(); // Apply styles
//   const [rover, setRover] = useState('');
//   const [sol, setSol] = useState('');
//   const [manifestData, setManifestData] = useState(null);
//   const [error, setError] = useState('');

//   const fetchManifest = async () => {
//     try {
//       const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch manifest');
//       }
//       const data = await response.json();
//       setManifestData(data.photo_manifest);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching manifest:', error);
//       setError('Failed to fetch manifest. Please make sure the rover name is correct and try again.');
//     }
//   };

//   const handleChange = (event) => {
//     setRover(event.target.value);
//   };

//   const handleSolChange = (event) => {
//     setSol(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchManifest();
//   };

//   return (
//     <Container maxWidth="md">
//       <div className={classes.container}>
//         <Typography variant="h4" gutterBottom>Mars Rover Manifest</Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Select a rover</InputLabel>
//                 <Select value={rover} onChange={handleChange}>
//                   <MenuItem value="">Select Rover</MenuItem>
//                   <MenuItem value="curiosity">Curiosity</MenuItem>
//                   <MenuItem value="opportunity">Opportunity</MenuItem>
//                   <MenuItem value="spirit">Spirit</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Enter a sol number"
//                 fullWidth
//                 value={sol}
//                 onChange={handleSolChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button type="submit" variant="contained" color="primary" disabled={!rover}>Fetch Manifest</Button>
//             </Grid>
//           </Grid>
//         </form>
//         {error && <Typography color="error">{error}</Typography>}
//       </div>
//       {manifestData && (
//         <div className={classes.container}>
//           <Typography variant="h5">Manifest for {manifestData.name}</Typography>
//           <Typography>Landing Date: {manifestData.landing_date}</Typography>
//           <Typography>Launch Date: {manifestData.launch_date}</Typography>
//           <Typography>Status: {manifestData.status}</Typography>
//           <Typography>Most Recent Martian Sol: {manifestData.max_sol}</Typography>
//           <Typography>Most Recent Earth Date: {manifestData.max_date}</Typography>
//           <Typography>Total Photos: {manifestData.total_photos}</Typography>
//           {/* Photo list here */}
//         </div>
//       )}
//     </Container>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../stylesheet/ManifestStyle'; // Import the styles file
import { Container, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const API_KEY = 'DEMO_KEY'; // Your NASA API key

function App() {
  const classes = useStyles(); // Apply styles
  const [rover, setRover] = useState('');
  const [sol, setSol] = useState('');
  const [manifestData, setManifestData] = useState(null);
  const [error, setError] = useState('');

  const fetchManifest = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch manifest');
      }
      const data = await response.json();
      setManifestData(data.photo_manifest);
      setError('');
    } catch (error) {
      console.error('Error fetching manifest:', error);
      setError('Failed to fetch manifest. Please make sure the rover name is correct and try again.');
    }
  };

  const handleChange = (event) => {
    setRover(event.target.value);
  };

  const handleSolChange = (event) => {
    setSol(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchManifest();
  };

  // return (
  //   <Container maxWidth="md" >
  //     <div className={classes.container}>
  //       <Typography variant="h4" gutterBottom>Mars Rover Manifest</Typography>
  //       <form onSubmit={handleSubmit}>
  //         <Grid container spacing={2} alignItems="center">
  //           <Grid item xs={12} sm={6}>
  //             <FormControl fullWidth>
  //               <InputLabel>Select a rover</InputLabel>
  //               <Select value={rover} onChange={handleChange}>
  //                 <MenuItem value="">Select Rover</MenuItem>
  //                 <MenuItem value="curiosity">Curiosity</MenuItem>
  //                 <MenuItem value="opportunity">Opportunity</MenuItem>
  //                 <MenuItem value="spirit">Spirit</MenuItem>
  //               </Select>
  //             </FormControl>
  //           </Grid>
  //           <Grid item xs={12} sm={6}>
  //             <TextField
  //               label="Enter a sol number"
  //               fullWidth
  //               value={sol}
  //               onChange={handleSolChange}
  //             />
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Button type="submit" variant="contained" color="primary" disabled={!rover}>Fetch Manifest</Button>
  //           </Grid>
  //         </Grid>
  //       </form>
  //       {error && <Typography color="error">{error}</Typography>}
  //     </div>
  //     {manifestData && (
  //       <div className={classes.container}>
  //         <Typography variant="h5">Manifest for {manifestData.name}</Typography>
  //         <Typography>Landing Date: {manifestData.landing_date}</Typography>
  //         <Typography>Launch Date: {manifestData.launch_date}</Typography>
  //         <Typography>Status: {manifestData.status}</Typography>
  //         <Typography>Most Recent Martian Sol: {manifestData.max_sol}</Typography>
  //         <Typography>Most Recent Earth Date: {manifestData.max_date}</Typography>
  //         <Typography>Total Photos: {manifestData.total_photos}</Typography>
  //         <div className={classes.photoListContainer}>
  //           <Typography variant="h6">Photos by Sol:</Typography>
  //           <ul>
  //             {sol ? (
  //               manifestData.photos.filter((photo) => photo.sol === parseInt(sol, 10)).map((photo) => (
  //                 <li key={photo.sol}>
  //                   Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
  //                 </li>
  //               ))
  //             ) : (
  //               manifestData.photos.map((photo) => (
  //                 <li key={photo.sol}>
  //                   Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
  //                 </li>
  //               ))
  //             )}
  //           </ul>
  //         </div>
  //       </div>
  //     )}
  //   </Container>
  // );


  return (
    <div className={classes.root}>
    <Container maxWidth="md" >
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom>Mars Rover Manifest</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select a rover</InputLabel>
                <Select value={rover} onChange={handleChange}>
                  <MenuItem value="">Select Rover</MenuItem>
                  <MenuItem value="curiosity">Curiosity</MenuItem>
                  <MenuItem value="opportunity">Opportunity</MenuItem>
                  <MenuItem value="spirit">Spirit</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Enter a sol number"
                fullWidth
                value={sol}
                onChange={handleSolChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" disabled={!rover}>Fetch Manifest</Button>
            </Grid>
          </Grid>
        </form>
        {error && <Typography color="error">{error}</Typography>}
      </div>
      {manifestData && (
        <div className={classes.container}>
          <Typography variant="h5">Manifest for {manifestData.name}</Typography>
          <Typography>Landing Date: {manifestData.landing_date}</Typography>
          <Typography>Launch Date: {manifestData.launch_date}</Typography>
          <Typography>Status: {manifestData.status}</Typography>
          <Typography>Most Recent Martian Sol: {manifestData.max_sol}</Typography>
          <Typography>Most Recent Earth Date: {manifestData.max_date}</Typography>
          <Typography>Total Photos: {manifestData.total_photos}</Typography>
          <div className={classes.photoListContainer}>
            <Typography variant="h6">Photos by Sol:</Typography>
            <div className={classes.scrollContainer}>
              <ul>
                {sol ? (
                  manifestData.photos.filter((photo) => photo.sol === parseInt(sol, 10)).map((photo) => (
                    <li key={photo.sol}>
                      Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
                    </li>
                  ))
                ) : (
                  manifestData.photos.map((photo) => (
                    <li key={photo.sol}>
                      Sol {photo.sol}: {photo.total_photos} photos - Cameras: {photo.cameras.join(', ')}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
    </div>
  );

}

export default App;