// import React from 'react';
// import './category.style.css';
import { withRouter } from "react-router-dom";
import Number from '../number/number.component';
import { green } from '@material-ui/core/colors';

// import Fade from "react-reveal/Fade";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Badge from "@material-ui/core/Badge";
const Category = ({
  title,
  icon,
  current,
  total,
  index,
  history,
  location,
  tuchable
}) => {


  const { pathname } = location;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    //         <div>
    //             <div className='category'

    //                 onClick={() => { tuchable && history.push(`${pathname}/${index}`) }}>

    //                 <svg version="1.1" height="680" width="680" viewBox="0 0 30 30">
    //                     <path d="M15 0 Q0 0 0 15 T15 30 30 15 15 0" fill="#59C8F3" stroke="none" />

    //                 </svg>
    //                 <img className='category-icon' src={icon} />

    //                 <p className='category-title' >{title}</p>

    //             </div>
    //         </div>

    // )

    <Card className={classes.card} style={{ width: "100%" }}
      onClick={() => history.push(`/question/${index}/`)}
    >
      <CardHeader
        avatar={
                        <Icon className={icon+' fa-fw'} style={{ color: '#b71c1c', fontSize: '32px',background:'cover',marginRight:'-36%' }} />

        }
        action={
          <Number total={25} current={8} currentStyle={{ fontSize: '26px' }} />
        }
        title={title}
        subheader="توضیحات مربوط به سوال"
        style={{ fontFamily: 'Vazir' }}
        classes={{ title: classes.title, subheader: classes.subheader }}
      />
    </Card>
  );
};
// #00e676 nice green
export default withRouter(Category);

// export default function RecipeReviewCard() {

//   return (

//   );
// }
const useStyles = makeStyles(theme => ({
  card: {
    fontFamily: 'Vazir',
    width: '100%',

  },
  media: {
    height: 0,
    paddingTop: "56.25%",// 16:9
    fontFamily: 'Vazir',

  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),

  },
  expandOpen: {
    transform: "rotate(180deg)",

  },
  avatar: {
    backgroundColor: 'white',
    marginLeft: 10,
    fontFamily: 'Vazir',
    borderColor:'transparent',

  },
  title: {
    fontFamily: 'Vazir',

  },
  subheader: {
    fontFamily: 'Vazir',

  }
}));
