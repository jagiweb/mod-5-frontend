import React from 'react'

class Intro extends React.Component {

    render() { 
        return ( 
            <div className="container">
                <section class="rw-wrapper">
                    <h2 class="rw-sentence m-top">
                        {/* <span>Welcome to</span> */}
                        <span>I am </span>
                        <div class="rw-words rw-words-1">
                            <span>Sharnie Pilar</span>
                            <span>a designer</span>
                            <span>an Artist</span>
                            <span>the best</span>
                            <span>a dog lover</span>
                            <span>passionate</span>
                        </div>
                        <br />
                        
                    </h2>
                </section>
            </div>
         );
    }
}
 
export default Intro;