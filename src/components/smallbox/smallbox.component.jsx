import React from 'react';


const Smallbox = (props) => {
    const { number, title, boxClass, iconClass } = props
    return (

        <div className="col-lg-3 col-6">
            <div className={boxClass}>
                <div className="inner">
                    <h3>{number}</h3>
                    <p>{title}</p>
                </div>
                <div className="icon">
                    <i className={iconClass} />
                </div>
                <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fa fa-arrow-circle-left" /></a>
            </div>
        </div>



    )
}


export default Smallbox;