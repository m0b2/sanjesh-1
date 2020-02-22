import React, { Component } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import './admin-question-card-data.style.css';
const QCardData = props => {
  const [expanded, setExpanded] = React.useState(false);
  const {
    title,
    message,
    avatar,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5
  } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // get data

  return (
    <div id="rootCardMess">
      <Card>
        <CardHeader
          id="CardHeader"
          avatar={
            <Avatar aria-label="recipe" className={"avatar"} src={avatar} />
          }
          action={
            <IconButton
              className={clsx("xpand", {
                ["expandOpen"]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{ color: "#b71c1c" }} />
            </IconButton>
          }
          title=<span id="titleCard">{title}</span>
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className="paragraph2" paragraph>
              متن پیام :<br />
              <span style={{ color: "black" }}>{message}</span>
            </Typography>
            <Typography className="paragraph2" paragraph>
              گزینه اول :<span style={{ color: "black" }}>{answer1}</span>
            </Typography>
            <Typography className="paragraph2" paragraph>
              گزینه دوم :<span style={{ color: "black" }}>{answer2}</span>
            </Typography>
            <Typography className="paragraph2" paragraph>
              گزینه سوم :<span style={{ color: "black" }}>{answer3}</span>
            </Typography>
            <Typography className="paragraph2" paragraph>
              گزینه چهارم :<span style={{ color: "black" }}>{answer4}</span>
            </Typography>
            <Typography className="paragraph2" paragraph>
              گزینه پنجم :<span style={{ color: "black" }}>{answer5}</span>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* -------------------------------------------------- */}
    </div>
  );
};

export default QCardData;
