import {makeStyles} from '@material-ui/core/styles';

// const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    background: '#FFFFFF',
  },
  offset: theme.mixins.toolbar,
  title: {
      color: 'black'
  },
  boxStyle: {
      textAlign: 'center',
      display: 'block',
      padding: '15px 0px'
  }
}));

export default useStyles;
