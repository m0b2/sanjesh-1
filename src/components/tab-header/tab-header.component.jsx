import React from 'react';
import './tab-header.style.css';
import TabItem from '../tab-item/tab-item.component';
import { connect } from 'react-redux';

const TabHeader = ({ SideTab }) => {

    
    const [active, setActive] = React.useState(0);
    const items = SideTab.title.map((value, index) =>
    <TabItem title={value} activeTab={SideTab.current} setActive={setActive} index={index} key={`tab${index}`} />
)

    return (
        <div className='tab-contianer'>
            {items}
        </div>
    )

}
const mapStatetoProps = (state) => {
    return ({
        SideTab: state.SideTab
    })
}
export default connect(mapStatetoProps)(TabHeader);