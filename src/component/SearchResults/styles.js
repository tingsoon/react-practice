import { makeStyles, fade } from "@material-ui/core/styles";
// const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    minHeight: "100vh",
  },
  root: {
    display: "block",
  },
  title: {
    fontSize: 28,
    color: "#161616",
  },
  rootCard: {
    // maxWidth: 345,
    margin: "auto",
    padding: 20,
  },
  media: {
    height: 500,
  },
  card: {
    boxShadow: "none",
  },
  alert: {
    marginTop: 20,
    marginBottom: 20,
  },
  loading: {
    display: "inline-block",
    marginRight: 20,
  },
}));

export default useStyles;
