import React from "react";
//
// add style external
import "./admin-category.style.css";
import IconButton from "@material-ui/core/IconButton";
import QuestionCard from "../admin-question-card/admin-question-card.component";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
// import QuestionNew from "../questionNew/questionNew.components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import AddCategories from "../../Components/AddCategori/AddCategori.components";

/**
 * id
 * title
 * answer[]
 */
const useStyles = makeStyles(theme => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  speedDial: {
    position: "fixed",
    bottom: "20px",
    right: "20px"
  },
  icon: { color: "#b71c1c", fontSize: "50pt" }
}));
// let users = [{ id: "", title: "پیشینه روابط" }];


const Question_Page = props => {
  const classes = useStyles();
  const { categories } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa"
      }}
    >
      <div>
        {/* <Backdrop style={{ zIndex: 999 }} open={MySpeedDial} /> */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Grid container spacing={3}>
          {categories.map(data => {
            return (
              <Grid item xs={6} s={6} md={2}>
                <QuestionCard
                  // message={data.message}
                  catName={data.title}
                  id={data.id}
                  // avatar={data.src}
                  icon={"far fa-question-circle"}
                />
              </Grid>
            );
          })}
        </Grid>
        <div>
          {/*  */}
          {/*  */}
          {/*  */}

          {/* <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            className={classes.speedDial}
            // hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleCloseSpeedDial}
            onOpen={handleOpenSpeedDial}
            open={MySpeedDial}
          >
            <SpeedDialAction
              key={"سوال"}
              icon={<FileCopyIcon />}
              tooltipTitle={"سوال"}
              tooltipOpen
              onClick={handleOpen}
            />

            <SpeedDialAction
              key={"دسته"}
              icon={<GroupWorkIcon />}
              tooltipTitle={"دسته"}
              tooltipOpen
              onClick={handleOpenCategori}
            />
          </SpeedDial> */}


          {/*  */}
          {/*  */}
          {/*  */}
          {/* <AddCategories
            openCategori={openCategori}
            handleCloseCategori={handleCloseCategori}
            setCategori={setCategori}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Question_Page;
