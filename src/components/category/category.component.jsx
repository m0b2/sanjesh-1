
import { withRouter } from "react-router-dom";
import Number from '../number/number.component';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import { useDispatch } from 'react-redux';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const Category = ({
  title,
  icon,
  current,
  total,
  index,
  history,
  location,
  tuchable,
  description,
  category_id,
  questionMode,
  notificationMode,
  adminUserMode
}) => {


  const { pathname } = location;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  if (adminUserMode) {

    return (


      <Card className={classes.card} style={{ width: "100%" }}
        onClick={() => {
          // history.push(`/notification/${index}/`)
          // dispatch({ type: 'SET_CURRENT_QUESTIONS', payload: index })
        }


        }
      >
        <CardHeader
          avatar={
            <Icon className={icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '32px', background: 'cover', marginRight: '-36%' }} />

          }
          action={
            <Number total={''} current={category_id} currentStyle={{ fontSize: '26px' }} questionMode/>
          }
          title={title}
          subheader={description}
          style={{ fontFamily: 'Samim' }}
          classes={{ title: classes.title, subheader: classes.subheader }}
        />
      </Card>



    )
  }








  if (notificationMode) {

    return (


      <Card className={classes.card} style={{ width: "100%" }}
        onClick={() => {
          history.push(`/notification/${index}/`)
          dispatch({ type: 'SET_CURRENT_QUESTIONS', payload: index })
        }


        }
      >
        <CardHeader
          avatar={
            <Icon className={icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '32px', background: 'cover', marginRight: '-36%' }} />

          }
          action={
            <Number total={''} current={category_id} currentStyle={{ fontSize: '26px' }} questionMode/>
          }
          title={title}
          subheader={description}
          style={{ fontFamily: 'Samim' }}
          classes={{ title: classes.title, subheader: classes.subheader }}
        />
      </Card>



    )
  }




  if (questionMode) {

    return (


      <Card className={classes.card} style={{ width: "100%" }}
        onClick={() => {
          history.push(`/question/${index}/`)
          dispatch({ type: 'SET_CURRENT_QUESTIONS', payload: index })
        }


        }
      >
        <CardHeader
          avatar={
            <Icon className={icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '32px', background: 'cover', marginRight: '-36%' }} />

          }
          action={
            <Number total={''} current={category_id} currentStyle={{ fontSize: '26px' }} questionMode/>
          }
          title={title}
          subheader={description}
          style={{ fontFamily: 'Samim' }}
          classes={{ title: classes.title, subheader: classes.subheader }}
        />
      </Card>



    )
  }

















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
      onClick={() => {
        history.push(`/question/${index}/`)
        dispatch({ type: 'SET_CURRENT_QUESTIONS', payload: index })
      }


      }
    >
      <CardHeader
        avatar={
          <Icon className={icon + ' fa-fw'} style={{ color: '#b71c1c', fontSize: '32px', background: 'cover', marginRight: '-36%' }} />

        }
        action={
          <Number total={25} current={8} currentStyle={{ fontSize: '26px' }} />
        }
        title={title}
        subheader={description}
        style={{ fontFamily: 'Samim' }}
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
    fontFamily: 'Samim',
    width: '100%',
    cursor: 'pointer',

  },
  media: {
    height: 0,
    paddingTop: "56.25%",// 16:9
    fontFamily: 'Samim',

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
    fontFamily: 'Samim',
    borderColor: 'transparent',

  },
  title: {
    fontFamily: 'Samim',
    fontWeight: '900'

  },
  subheader: {
    fontFamily: 'Samim',

  }
}));
