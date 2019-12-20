import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Theme } from "./common/theme";

import {
  GlobalHeader,
  GlobalTabs,
  Breadcrumb,
  ProjectPane,
  TabPane,
  NewsPane
} from "./widgets";
// import GuildBoard from "./widgets/GuildBoard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const widget = [
  {
    title: "Cập nhật",
    label: "update-tab",
    body: <span>Content 1</span>
  },
  {
    title: "TOP",
    label: "top-tab",
    body: <span>Content 2</span>
  }
];

const data = [
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover2.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover3.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  },
  {
    cover: "img/cover1.jpg",
    title: "Naze Boku no Sekai wo Dare mo Oboeteinainoka?"
  }
];

const mainContent = [
  {
    title: "Main board",
    label: "latest-news",
    body: <NewsPane data={data} />
  },
  {
    title: "Mới nhất",
    label: "top-tab",
    body: <span>Content 2</span>
  }
];

class MainView extends React.Component {
  render() {
    return (
      <Grid container xs={11} spacing={1}>
        <Grid item xs={12} md={7}>
          <ProjectPane data={data} title="Mới nhất" />
          <TabPane immersive content={mainContent} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TabPane content={widget} />
        </Grid>
      </Grid>
    );
  }
}

export default MainView;
