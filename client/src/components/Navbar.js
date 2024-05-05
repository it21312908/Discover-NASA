// import React, { useContext, } from 'react'
// import AuthContext from '../context/AuthContext'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import ToastContext from "../context/ToastContext";


// export default function Navbar({title = "CMS"}) {

//     // const { toast } = useContext(ToastContext);

//     const navigate = useNavigate();
//     const {user, setUser} = useContext(AuthContext);
//     return (

//         <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="/">{title}</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarColor01">
//                     <ul class="navbar-nav ms-auto">
//                     {user ? (
//               <>
//                <li
//                   className="nav-item"
//                   onClick={() => {
//                     setUser(null);
//                     localStorage.clear();
//                     // toast.success("Logged out.");
//                     navigate("/login", { replace: true });
//                   }}
//                 >
//                <button className="btn btn-danger">Logout</button>
//                </li>

//                <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/history")}>History</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/random")}>Random</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/sol")}>Mars Sol</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/earth")}>Mars Earth</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/mission")}>Manifest</button>
//                 </li>
//               </>
//             ) : (
//               <>

//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/login")}>Login</button>
//                 </li>

//                 <li className="nav-item">
//                   <button className="btn btn-danger" onClick={() => navigate("/register")}>Register</button>
//                 </li>
          
     
//               </>
//             )}
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     )
// }


// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton, Link, makeStyles } from '@material-ui/core';
// import logo from '../assets/logo.png'; // Ensure the path to your logo image is correct

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     // backgroundColor: theme.palette.primary.main,
//     backgroundColor: 'black',
    
//   },
//   logo: {
//     height: '50px',
//   },
//   title: {
//     flexGrow: 1,
//     fontWeight: 'bold',
//   },
//   navLink: {
//     margin: theme.spacing(0, 1),
//   },
// }));

// export default function Navbar({ title = "NASA API PORTAL" }) {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(AuthContext);

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           {title}
//         </Typography>
//         <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="home">
//           <img src={logo} alt="Logo" className={classes.logo} />
//         </IconButton>
//         {user ? (
//           <>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/history">
//               History
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/random">
//               Random
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/landingPage">
//               Home
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/sol">
//               Mars Sol
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/earth">
//             Mars Earth
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/mission">
//             Manifest
//             </Button>
//             <Button color="inherit" className={classes.navLink} onClick={() => {
//               setUser(null);
//               localStorage.clear();
//               navigate("/login", { replace: true });
//             }}>
//               Logout
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/login">
//               Login
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/register">
//               Register
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// import React, { useContext } from 'react';
// import AuthContext from '../context/AuthContext';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton, Link, makeStyles } from '@material-ui/core';
// import logo from '../assets/logo.png'; // Ensure the path to your logo image is correct

// // Import your background image
// import backgroundImage from '../assets/background2.jpg';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     // Set background image and additional styling
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover', // Adjust background image size
//     backgroundRepeat: 'no-repeat', // Prevent background image from repeating
//     backgroundPosition: 'center', // Center the background image
//     boxShadow: 'none', // Remove default box shadow
//     // You can add more custom styling if needed
//   },
//   logo: {
//     height: '50px',
//   },
//   title: {
//     flexGrow: 1,
//     fontWeight: 'bold',
//   },
//   navLink: {
//     margin: theme.spacing(0, 1),
//   },
// }));

// export default function Navbar({ title = "NASA API PORTAL" }) {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const { user, setUser } = useContext(AuthContext);

//   return (
//     <AppBar position="static" className={classes.appBar}>
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           {title}
//         </Typography>
//         <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="home">
//           <img src={logo} alt="Logo" className={classes.logo} />
//         </IconButton>
//         {user ? (
//           <>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/history">
//               History
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/random">
//               Random
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/landingPage">
//               Home
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/sol">
//               Mars Sol
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/earth">
//               Mars Earth
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/mission">
//               Manifest
//             </Button>
//             <Button color="inherit" className={classes.navLink} onClick={() => {
//               setUser(null);
//               localStorage.clear();
//               navigate("/login", { replace: true });
//             }}>
//               Logout
//             </Button>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/login">
//               Login
//             </Button>
//             <Button color="inherit" className={classes.navLink} component={RouterLink} to="/register">
//               Register
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }







import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Link, makeStyles } from '@material-ui/core';
import logo from '../assets/logo.png'; // Ensure the path to your logo image is correct

// Import your background image
import backgroundImage from '../assets/background2.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // Set background image and additional styling
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Adjust background image size
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    backgroundPosition: 'center', // Center the background image
    boxShadow: 'none', // Remove default box shadow
    // You can add more custom styling if needed
  },
  logo: {
    height: '50px',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  navLink: {
    margin: theme.spacing(0, 1),
  },
}));

export default function Navbar({ title = "NASA API PORTAL", apod , rover }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="home">
          <img src={logo} alt="Logo" className={classes.logo} />
        </IconButton>
        {user ? (
          <>
            {apod && (
              <>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/apod">
                  APOD
                </Button>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/history">
                  History
                </Button>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/random">
                  Random
                </Button>
              </>
            )}
            {rover && (
              <>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/earth">
                  Rover by Earth Date
                </Button>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/sol">
                  Rover by Sol
                </Button>
                <Button color="inherit" className={classes.navLink} component={RouterLink} to="/mission">
                  Manifest
                </Button>
              </>
            )}
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/landingPage">
              Home
            </Button>
            <Button color="inherit" className={classes.navLink} onClick={() => {
              setUser(null);
              localStorage.clear();
              navigate("/login", { replace: true });
            }}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/login">
              Login
            </Button>
            <Button color="inherit" className={classes.navLink} component={RouterLink} to="/register">
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}