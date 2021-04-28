import { makeStyles } from "@material-ui/core/styles";

// const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    background: "#FFFFFF",
  },
  offset: theme.mixins.toolbar,
  title: {
    color: "black",
  },
  boxStyle: {
    textAlign: "center",
    display: "block",
    padding: "15px 0px",
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    // width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default useStyles;
