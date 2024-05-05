import { makeStyles } from '@material-ui/core/styles';
import backgroundImg from '../assets/planet-earth-background.jpg'


const useStyles = makeStyles((theme) => ({

  root: {
    padding: theme.spacing(4),
    background: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:`url(${backgroundImg})`,
  },

  container: {
    marginTop: '70px',
    padding: theme.spacing(2),
    backgroundColor: '#f0f0f0',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color:'black',
  },

  photoListContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  scrollContainer: {
    maxHeight: '200px', // Adjust as needed
    overflowY: 'auto',
  },
}));

export default useStyles;
