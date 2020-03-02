import { withRouter } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar'
import compare from '../../assets/notif-compare.svg';
import mail from '../../assets/mail.svg';
import analyze from '../../assets/analyze.svg';
import moment from 'moment';


const Category = ({ title, content, isChecked, type, onClick, created_at }) => {
  const classes = useStyles();
  const mySrc = type === 'message' ? mail : type === 'request' ? compare : analyze;
  let displayDate = "";
  if (!moment.isMoment(created_at)) {
    displayDate = getDisplayDate(created_at);
  }








  return (

    <Card className={classes.card} style={{ width: "100%" }}
      onClick={onClick}

    >
      <CardHeader
        avatar={
          <Avatar src={mySrc} sizes={'80px'} variant={'square'}
            style={{ color: '#b71c1c', fontSize: '32px', background: 'cover', marginRight: '-36%' }} >
            {/* <img className='icon-card-img' src={compare} alt={title} style={{width:'28px'}}/> */}
          </Avatar>




        }
        action={
          <span style={{

            fontFamily: 'Vazir',
            fontSize:'12px'




          }}>
            {displayDate}</span>
        }
        title={title}
        subheader={content}
        style={{ fontFamily: 'Samim' }}
        classes={{ title: classes.title, subheader: classes.subheader, action: classes.action }}
      />
    </Card>
  );
};
export default withRouter(Category);

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

  },
  action: {

    marginTop: '5px'
  }
}));


const getDisplayDate = (created_at) => {
  let displayDate = "";
  let startDate = moment(created_at);
  let endDate = moment(new Date());
  let seconds = endDate.diff(startDate, "seconds");
  let minutes = endDate.diff(startDate, "minutes");
  let hours = endDate.diff(startDate, "hours");
  let days = endDate.diff(startDate, "days");
  let weeks = endDate.diff(startDate, "weeks");


  if (seconds < 61) {
    displayDate = `لحظاتی قبل`
  }
  else if (minutes < 61) {
    displayDate = `${minutes} دقیقه قبل`
  }
  else if (hours < 25) {
    displayDate = `${hours} ساعت قبل`
  }
  else if (days < 8) {
    displayDate = `${days} روز قبل`
  } else {
    displayDate = `${weeks} هفته قبل`
  }

  return displayDate;
}