import React from "react";
import Home from "./pages/home/home.page";
import Categories from "./pages/categories/categories.page";
import Footer from "./components/footer/footer.component";
import Question_review from "./pages/question-review/question-review.page";
import Notification from "./pages/notification/notification.page";
import "./App.css";
import Appbar from "./components/appbar/appbar.component";
import { SidebarContext } from "./context/sidebar.context";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import Header from "./components/header-navigation/header-navigation.component";
import ComparePage from "./pages/compare/compare.page";
import ProfileView from "./pages/profile-view/profile-view.component";
import SideList from "./containers/side-list/side-list.container";
import { connect, useDispatch } from "react-redux";
import AnswerPage from "./pages/answer/answer.page";
import Edit_Profile_Page from "./pages/profile-edit/profile-edit.component";
import Sign_Up_Page from "./pages/signUp/sign_up.page";
import Question_Analyze from './pages/question-analyze/question-analyze.page';
import User_Info_Page from "./pages/user-info/user_info.page";
import About_Us_Page from './pages/about-us/about-us.page';
import { loadCSS } from "fg-loadcss";
import SinginPage from './pages/sign_in/sign_in.page';
import Receipt from './components/pay-receipt/pay-receipt.component';
import FirstMate from './components/first-information/first-information.component';
import Button from '@material-ui/core/Button'

import axios from 'axios';
import AdminSideBar from './components/admin-sidebar/admin-sidebar.component';
import AdminCategoryPage from './pages/admin-view-categories/admin-view-categories';
import CategoryEdit from './pages/admin-category-questions/admin-category-questions';
import AdminAddCategory from './pages/admin-add-category/admin-add-category.component';
import AdminQuestions from './pages/admin-manage-questions/admin-manage-questions';
import AdminEditQuestion from './pages/admin-question-edit/admin-question-edit';
import AdminAddQuestion from './pages/admin-add-question/admin-add-question';
import AdminNotifications from './pages/admin-notifications/admin-notifications';
import AdminNotifactionsEdit from './pages/admin-notification-edit/admin-notification-edit';
import AdminAddNotification from './pages/admin-add-notification/admin-add-notification';
import AdminUsersList from './pages/admin-user-list/admin-user-list';
import AdminSetting from './pages/admin-setting/admin-setting';
import AdminRoles from './pages/admin-add-role/admin-add-role';
import AdminCreateAdmin from './pages/admin-create-admin/admin-create-admin';
import queryString from 'query-string';
import resStore from './redux/store';
import AdminChart from './pages/admin-chart/admin-chart';
import AdminHomePage from './pages/admin-home/admin-home';
const Debug = false;

axios.interceptors.request.use((config) => {
  /** In dev, intercepts request and logs it into console for dev */
  if (Debug) { console.info("✉️Succ", config); }
  // if(config.data)
  // resStore.dispatch({ type: 'ERORR' })
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  if (Debug) return { ...config, url: proxyurl + config.url };
  return config;
}, (error) => {
  resStore.dispatch({ type: 'ERORR' })
  if (Debug) {
    console.info("✉️", error);
  }

  return Promise.reject(error);
});




axios.interceptors.response.use((response) => {
  if (Debug) { console.info("✉️Response", response); }
  return response;
}, (error) => {
  if (Debug) {
    console.info("✉️Error", error.response);
  }
  resStore.dispatch({ type: 'ERORR', payload: error.response.statusText })
  return Promise.reject(error);



});























const { status, username, password, message } = queryString.parse(window.location.search);
// man amade am vay vay
// rnpm baraye fron
// add address font

function App({ sideTab, isFooterNeeded, user, isNeededReducer, admin }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user.admin) {
      CreateAccess(user, dispatch);
    }
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );



    // fetchCategories();



  }, []);





  const [isOpen, setOpen] = React.useState({ right: false });
  const SidebarOpen = React.useMemo(() => ({ isOpen, setOpen }), [isOpen]);
  // return <FirstMate />
  if (!user || !user.isLoggedIn) {
    if (status === 'OK') {
      return <Receipt username={username} password={password} status={status} />
    }
    if (status === 'NO') {
      return <h4 style={{ textAlign: 'center' }}>{message}</h4>
    }
    return <SinginPage />
  }


  // GONE ON REFRESH

  if ((user.first_time && !user.admin)) {

    return <FirstMate />
  }

  if (!user.admin && (!user.height || !user.birthday)) {

    return <FirstMate />
  }









  return (
    <div className="app">
      <SidebarContext.Provider value={SidebarOpen}>

        <div className="main-app-and-list-wrapper">
          {window.screen.width < 800 ? null : <Header isAdmin={user.admin} />}
          {sideTab.isVisible && window.screen.width > 800 ? <SideList /> : null}
          <div className="main-app">
            {user.admin ? <AdminSideBar /> : <Sidebar />}

            {window.screen.width < 800 && isNeededReducer.appbar ? <Appbar /> : null}
            {/* {window.screen.width < 421 ? <Sidebar /> : null} */}

            {!user.error ? (



              user.client ?
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/question" component={Categories} />
                  <Route
                    exact
                    path="/question/:index"
                    component={Question_review}
                  />
                  <Route exact path="/compare" component={ComparePage} />
                  <Route exact path="/notification" component={Notification} />
                  <Route exact path="/profile" component={ProfileView} />
                  <Route
                    exact
                    path="/question/:index/answer"
                    component={AnswerPage}
                  />
                  <Route exact path="/edit" component={Edit_Profile_Page} />
                  <Route exact path="/question/:index/analyze" component={Question_Analyze} />
                  <Route exact path="/aboutus" component={About_Us_Page} />
                  {/* <Route exact path="/signin" component={Sign_In_Page} /> */}
                  <Route exact path="/signup" component={Sign_Up_Page} />
                  <Route exact path="/userInfo" component={User_Info_Page} />
                  <Route exact path="/userInfo" component={User_Info_Page} />

                  {/* <Redirect to="/home" /> */}
                </Switch>


                :



                (user.admin && admin.access) ?


                  <Switch>


                    <Route
                      exact
                      path="/home"
                      component={AdminHomePage}
                    />


                    <Route exact
                      path="/chart"
                      component={AdminChart} />


                    {admin.access.category.view
                      ?
                      <Route
                        exact
                        path="/category"
                        component={AdminCategoryPage}
                      />
                      :
                      null
                    }


                    {admin.access.notification.view
                      ?
                      <Route
                        exact
                        path="/notifications"
                        component={AdminNotifications}
                      />
                      :
                      null
                    }


                    {admin.access.role.view
                      ?
                      <Route
                        exact
                        path="/roles"
                        component={AdminRoles}
                      />
                      :
                      null
                    }


                    {admin.access.user.view
                      ?
                      <Route
                        exact
                        path="/users"
                        component={AdminUsersList}
                      />
                      :
                      null
                    }


                    {admin.access.setting.view
                      ?
                      <Route
                        exact
                        path="/setting"
                        component={AdminSetting}
                      />
                      :
                      null
                    }


                    {admin.access.notification.create
                      ?
                      <Route
                        exact
                        path="/addnotifications"
                        component={AdminAddNotification}
                      />
                      :
                      null
                    }


                    {admin.access.user.create
                      ?
                      <Route
                        exact
                        path="/createadmin"
                        component={AdminCreateAdmin}
                      />
                      :
                      null
                    }


                    {admin.access.category.create
                      ?
                      <Route
                        exact
                        path="/addcategory"
                        component={AdminAddCategory}
                      />

                      :
                      null
                    }


                    {admin.access.category.update
                      ?
                      <Route
                        exact
                        path="/category/:index"
                        component={CategoryEdit}
                      />

                      :
                      null
                    }


                    {admin.access.question.view
                      ?
                      <Route
                        exact
                        path="/questions"
                        component={AdminQuestions}
                      />

                      :
                      null
                    }


                    {admin.access.question.update
                      ?
                      <Route
                        exact
                        path="/question/:index"
                        component={AdminEditQuestion}

                      />

                      :
                      null
                    }


                    {admin.access.question.create
                      ?
                      <Route
                        exact
                        path="/addQuestion/:index"
                        component={AdminAddQuestion} />

                      :
                      null
                    }

                    {admin.access.notification.update
                      ? <Route
                        exact
                        path="/notification/:index"
                        component={AdminNotifactionsEdit}
                      />
                      :
                      null}







                  </Switch>



                  :

                  null











            )


              :
              <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>{user.erorr_message}</h2>
                <h2 style={{ textAlign: 'center' }}>ارتباط با سرور برقرار نشد</h2>
                <Button variant="contained" onClick={() => {
                  window.location.reload();
                }}
                  style={{ fontFamily: 'Vazir', fontWeight: '900' }}
                >بارگذاری مجدد</Button>

              </div>



            }




          </div>
        </div>
      </SidebarContext.Provider>

      {isFooterNeeded && window.screen.width < 800 && user.client ? <Footer /> : null}
    </div>
  );
}

const mapStateToProps = store => {
  return {
    sideTab: store.SideTab,
    isFooterNeeded: store.FooterReducer,
    user: store.user,
    isNeededReducer: store.isNeededReducer,
    admin: store.admin,
  };
};

export default connect(mapStateToProps)(App);














const fetchCategories = () => {






  const headers = {
    'Content-Type': 'application/json',
    'Vary': 'Authorization',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`


  }


  const url = 'http://185.55.226.171/api/categories';
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  axios.post(url, 'data', {
    headers: headers
  })
    .then((response) => {

      const url2 = 'http://185.55.226.171/api/profile';



    })
    .catch((error) => {



    })



}






const CreateAccess = (user, dispatch) => {
  let dastrasi = {
    category: { view: null, create: null, update: null, delete: null },
    notification: { view: null, create: null, update: null, delete: null },
    role: { view: null, create: null, update: null, delete: null },
    user: { view: null, create: null, update: null, delete: null },
    setting: { view: null, create: null, update: null, delete: null },
    question: { view: null, create: null, update: null, delete: null },
  }
  if (user && user.roles) {

    Object.entries(user.roles).forEach(
      ([key, value]) => {
        value.map(role_type => {
          dastrasi = { ...dastrasi, [key]: { ...dastrasi[key], [role_type]: true } }

        })

      })





  }

  dispatch({ type: 'SET_ADMIN_ACCESS', payload: dastrasi })

}