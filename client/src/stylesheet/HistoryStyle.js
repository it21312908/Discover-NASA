// // RandomGeneratorStyles.js

// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   randomGeneratorContainer: {
//     textAlign: 'center',
//     padding: theme.spacing(2),
//   },
//   slider: {
//     overflow: 'hidden',
//     margin: '20px auto',
//     width: '90%',
//     maxWidth: 600,
//     position: 'relative',
//   },
//   slide: {
//     minWidth: '100%',
//     transition: 'transform 0.5s ease',
//   },
//   media: {
//     display: 'block',
//     width: '100%',
//     height: 'auto',
//   },
//   horizontalImagesContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center', // Center the images horizontally
//     alignItems: 'center', // Center the images vertically
//     gap: theme.spacing(2), // Adjust the gap between images
//   },
//   thumbnail: {
//     width: 200, // Set a fixed width for each thumbnail
//     height: 150, // Set a fixed height for each thumbnail
//     objectFit: 'cover', // Maintain aspect ratio and cover entire area
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)',
//     },
//   },
  


//   horizontalImagesContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0', // Background color
//     padding: theme.spacing(2), // Add padding
//     borderRadius: theme.spacing(1), // Add border radius
//   },
//   thumbnail: {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease-in-out',
//     '&:hover': {
//       transform: 'scale(1.05)', // Add hover effect
//     },
//   },
//   selectedMediaContainer: {
//     marginTop: theme.spacing(4), // Add margin top
//     padding: theme.spacing(2), // Add padding
//     backgroundColor: '#e0e0e0', // Background color
//     borderRadius: theme.spacing(1), // Add border radius
//   },
//   selectedMedia: {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     marginBottom: theme.spacing(2), // Add margin bottom
//   },
  
// }));

// export default useStyles;


// // import { makeStyles } from '@material-ui/core';

// // const useStyles = makeStyles((theme) => ({
// //   randomGeneratorContainer: {
// //     textAlign: 'center',
// //     padding: theme.spacing(2),
// //   },
// //   slider: {
// //     overflow: 'hidden',
// //     margin: '20px auto',
// //     width: '90%',
// //     maxWidth: 600,
// //     position: 'relative',
// //   },
// //   slide: {
// //     minWidth: '100%',
// //     transition: 'transform 0.5s ease',
// //   },
// //   media: {
// //     display: 'block',
// //     width: '100%',
// //     height: 'auto',
// //   },
// //   horizontalImagesContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     backgroundColor: '#f0f0f0', // Background color
// //     padding: theme.spacing(2), // Add padding
// //     borderRadius: theme.spacing(1), // Add border radius
// //     gap: theme.spacing(2), // Adjust the gap between images
// //   },
// //   thumbnail: {
// //     width: 200, // Set the width of each image or video
// //     height: 150, // Set the height of each image or video
// //     objectFit: 'cover', // Ensure that the entire image or video is visible within the defined dimensions
// //     cursor: 'pointer', // Show pointer cursor when hovering over images
// //     transition: 'transform 0.2s ease-in-out',
// //     '&:hover': {
// //       transform: 'scale(1.05)', // Add hover effect
// //     },
// //   },
// //   selectedMediaContainer: {
// //     marginTop: theme.spacing(4), // Add margin top
// //     padding: theme.spacing(2), // Add padding
// //     backgroundColor: '#e0e0e0', // Background color
// //     borderRadius: theme.spacing(1), // Add border radius
// //   },
// //   selectedMedia: {
// //     maxWidth: '100%',
// //     maxHeight: '100%',
// //     marginBottom: theme.spacing(2), // Add margin bottom
// //   },
// // }));

// // export default useStyles;


import { makeStyles } from '@material-ui/core';
import backgroundImg from '../assets/planet-earth-background.jpg'

const useStyles = makeStyles((theme) => ({
  randomGeneratorContainer: {
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundImage:`url(${backgroundImg})`,
  },
  slider: {
    overflow: 'hidden',
    margin: '20px auto',
    width: '90%',
    maxWidth: 600,
    position: 'relative',
  },
  slide: {
    minWidth: '100%',
    transition: 'transform 0.5s ease',
  },
  media: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  horizontalImagesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
    padding: theme.spacing(2), // Add padding
    borderRadius: theme.spacing(1), // Add border radius
    gap: theme.spacing(2), // Adjust the gap between images
  },
  thumbnail: {
    width: 200, // Set the width of each image or video
    height: 150, // Set the height of each image or video
    objectFit: 'cover', // Ensure that the entire image or video is visible within the defined dimensions
    cursor: 'pointer', // Show pointer cursor when hovering over images
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)', // Add hover effect
    },
    maxWidth: '100%',
    maxHeight: '100%',
  },
  selectedMediaContainer: {
    marginTop: theme.spacing(4), // Add margin top
    padding: theme.spacing(2), // Add padding
    backgroundColor: '#e0e0e0', // Background color
    borderRadius: theme.spacing(1), // Add border radius
  },
  selectedMedia: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginBottom: theme.spacing(2), // Add margin bottom
  },
}));

export default useStyles;
