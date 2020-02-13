import { withRouter } from "react-router-dom";
import Number from '../number/number.component';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar'
import compare from '../../assets/notif-compare.svg';
import mail from '../../assets/mail.svg';
import analyze from '../../assets/analyze.svg';
const Category = ({ title, content, isChecked, type }) => {
  const classes = useStyles();
  const mySrc = type === 'message' ? mail : type === 'request' ? compare : analyze;
  return (

    <Card className={classes.card} style={{ width: "100%" }}

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
           
            fontFamily:'Samim',
           
            
            
            
          }}>
            امروز</span>
        }
        title={title}
        subheader={content}
        style={{ fontFamily: 'Samim' }}
        classes={{ title: classes.title, subheader: classes.subheader,action:classes.action }}
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
  action:{

    marginTop:'5px'
  }
}));
