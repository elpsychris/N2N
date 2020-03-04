import React from "react";
import { useParams } from "react-router";

import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import { Dante } from "./dante/Dante";

import { TabPane, ProjectInfo, VolPane, DirTree, Expandable } from "./widgets";
import ChatView from "./chat/ChatView";
import color from "@material-ui/core/colors/amber";
import Noti from "./common/Noti";

// import GuildBoard from "./widgets/GuildBoard";

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
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  editor: {
    maxWidth: "100%"
  }
}));

export default function EditorView() {
  const classes = useStyles();
  const [chapContent, setChapContent] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [notiOpen, setNotiOpen] = React.useState(false);
  const [notiMsg, setNotiMsg] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const { chapId } = useParams();

  React.useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch("http://sonako.codes:8080/chapter/" + chapId);
        const json = await response.json();

        setChapContent(json);
        setLoading(false);
      } catch (err) { }
    }

    fetchProjects();
  }, []);

  const expand_data = [
    {
      title: "My data",
      description: "Manage your posts",
      content: <DirTree directory={myDirectory} />
    },
    {
      title: "Chapter info",
      description: "Edit this chapter info",
      content: (
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-basic"
              label="Title"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <Grid container justify="flex-end">
              <Button variant="contained" color="primary">
                Update
              </Button>
            </Grid>
          </div>
        </form>
      )
    }
  ];

  return [
    <Grid container justify="space-around" padding={5}>
      <Grid container item xs={12} md={4} justify="center" style={{
        padding: 10
      }}>
        <Expandable data={expand_data} />
      </Grid>
      <Grid item container spacing={2} direction="column" xs={12} md={8} style={{
        padding: 40
      }}>
        <Grid item className={classes.editor}>
          {loading ? null : (
            <Dante
              content={
                chapContent.content ? JSON.parse(chapContent.content) : null
              }
              read_only={!editMode}
              data_storage={{
                url: "https://sonako.codes:8080/chapter/" + chapId,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                crossDomain: true
              }}
              config={{ debug: true }}
              xhr={{
                // before_handler: function () {
                //   alert('this is the before ajax handler')
                // },
                success_handler: function (rs) {
                  setNotiMsg("Auto-save: DONE!");
                  setNotiOpen(true);
                },
                failure_handler: function (error) {
                  console.log("this is the error ajax handler", error);
                }
              }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>,
    <Noti open={notiOpen} msg={notiMsg} setOpen={setNotiOpen} />
  ];
}

const myDirectory = [
  {
    id: "1",
    title: "My Data",
    child: [
      {
        id: "2",
        title: "Maou no Vadalis",
        child: [
          {
            id: "3",
            title: "Vol 1",
            child: [
              {
                id: "4",
                title: "Chapter 1"
              },
              {
                id: "5",
                title: "Chapter 2"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "6",
    title: "Shared Data",
    child: []
  }
];
