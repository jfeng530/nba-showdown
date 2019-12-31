import React, { Component } from 'react';

export class HomeContainer extends Component {
    render() {
        return (
            // <div className="container ui">
            //     <h2 className="ui center aligned icon header ui orange message">
            //         <i className="basketball ball icon"></i>
            //         BS NBA Database
            //     </h2>
            // </div>
            <div class="ui inverted vertical masthead center aligned segment">

                <div class="ui text container">
                    <h1 class="ui inverted header">
                        Imagine-a-Company
                    </h1>
                    <h2>Do whatever you want when you want to.</h2>
                    <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div>
                </div>

            </div>
        );
    }
}

export default HomeContainer;
