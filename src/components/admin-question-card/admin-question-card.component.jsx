import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import './admin-question-card.style.css'
import { withRouter } from "react-router-dom";

const mydata = [{ title: "", answers: ["", "", "", "", ""] }];
// const mydata = [
//   { title: "aaa", answers: ["1111", "2222sss", "333sss", "4444sss", "55sss"] }
// ];
const Question_Page = props => {
  const {
    catName, id,
    icon, match,
    location,
    history
  } = props;


  const { index } = match.params;



  React.useEffect(() => {

    if (false) {
      const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization"
      };
      const data = {
        username: "admin",
        password: "1234"
      };

      const url = "http://185.55.226.171/api/login";
      const proxyurl = "https://cors-anywhere.herokuapp.com/";

      axios
        .post(url, data, {
          headers: headers
        })
        .then(response => {
          localStorage.setItem(
            "myBeLovedToken",
            JSON.stringify(response.data.data.token)
          );

          const url2 = "http://185.55.226.171/api/questions/" + id;

          axios
            .get(
              proxyurl + url2,
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${JSON.parse(
                    localStorage.getItem("myBeLovedToken")
                  )}`
                }
              },
              null
            )
            .then(response => {
              console.log(response);
              // alert(response.data.data.data);

              mydata.title = response.data.data.data.title;
              mydata.answers[0] = response.data.data.data.answers[0];
              mydata.answers[1] = response.data.data.data.answers[1];
              mydata.answers[2] = response.data.data.data.answers[2];
              mydata.answers[3] = response.data.data.data.answers[3];
              mydata.answers[4] = response.data.data.data.answers[4];
              // alert(this.state.mydata);
            });
        })
        .catch(error => {
          console.log(error);
        });








    }



  }, [])


  return (
    <div id="rootQuCard">
      <Card id="mainCard" onClick={() => { history.push(`/category/${id}`) }}>
        <Grid container spacing={3}>
          <Grid item xs={12} id="gridAvatarQuestion">
            <Icon
              className={icon + " fa-fw"}
              style={{
                marginTop: "20px",
                color: "#b71c1c",
                fontSize: "72px"
              }}
            />
          </Grid>
          <Grid item xs={12} id="gridNameQuestion">
            <span id="cateName">{catName}</span>
          </Grid>
        </Grid>
      </Card>


    </div>
  );
};

export default withRouter(Question_Page);
