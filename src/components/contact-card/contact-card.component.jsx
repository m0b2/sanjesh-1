import React from 'react';
import './contact-card.style.css';



export default ({ name, title, image }) => {



    return (
        

            
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: '#FAFAFA',
                    width: '200px',
                    border: '1px antiquewhite solid', boxShadow: '1px 1px 2px 2px aliceblue',
                    margin:'28px'
                }}>
                    <img alt={name}
                        src={image}
                        style={{ borderRadius: '50%', width: '128px', border: '4px white solid' }} />
                    <p style={{ textAlign: 'center', fontWeight:'900' }}>{name}</p>
                    <p style={{ textAlign: 'center',fontSize:'16px' }}>{title}</p>
                    <div id="social"><a className="facebookBtn smGlobalBtn" href="#" />
                        <a className="twitterBtn smGlobalBtn" href="#" />
                        <a className="googleplusBtn smGlobalBtn" href="#" />
                        <a className="linkedinBtn smGlobalBtn" href="#" />

                    </div>

                </div>



    )
}