import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    width: "100%",
    color: "#5b0909",
    fontWeight: "bold"
    // fontFamily: "Oswald"
  },
  paper: {
    height: 280,
    width: 160,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  cover: {
    width: "100%",
    height: 225,
    overflow: "hidden"
  },
  borderLayout: {
    width: "90%",
    height: "75%",
    position: "absolute",
    border: "2px solid rgb(65,60,105,0.5)"
  },
  link: {
    display: "flex",
    position: "relative",
    marginLeft: theme.spacing(1)
  }
}));

const getShortened = str =>
  str.length > 30 ? str.substring(0, 30) + "..." : str;

const projectItem = (item, classes) => {
  const preventDefault = event => event.preventDefault();
  return (
    <Paper className={classes.paper}>
      <div className={classes.cover}>
        <img src={item.cover} width="100%" />
      </div>
      <Link
        href="/projects/123"
        // onClick={preventDefault}
        className={classes.link}
        to={"/projects/123"}
      >
        {getShortened(item.title)}
      </Link>
      <div className={classes.borderLayout}></div>
    </Paper>
  );
};

export default function ProjectPane(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {props.title}
      </Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {props.data.map((k, i) => (
            <Grid key={i} item>
              {projectItem(k, classes)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
