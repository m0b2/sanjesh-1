import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './appbar.style.css';
import IconButton from '@material-ui/core/IconButton';
import Fade from 'react-reveal/Fade';

export default class DenseAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.listenScrollEvent = this.listenScrollEvent.bind(this);

    }
    listenScrollEvent(event) {
        console.log(event.path.Window);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
    }

render() {
    return (
        <Fade top opposite when>
            <div className={'Appbar'}
                onClick={this.listenScrollEvent}
            >
                <IconButton style={{ float: 'left' }} aria-label="delete">
                    <ArrowBackIcon />
                </IconButton>


            </div>
        </Fade>
    );
}
}
