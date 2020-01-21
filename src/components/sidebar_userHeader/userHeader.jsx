import React from 'react';


const UserHeader = ()=>{

    return(
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="https://www.gravatar.com/avatar/52f0fbcbedee04a121cba8dad1174462?s=200&d=mm&r=g" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">حسام موسوی</a>
        </div>
      </div>
    )
}


export default UserHeader;