import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Store from './StoreComponent';
import { ACCESSORIES } from '../shared/accessories';
import { APPAREL } from '../shared/apparel';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accessories: ACCESSORIES,
            apparel: APPAREL
        };
    }

    render () {

        const ProductWithId = ({match}) => {
            return (
                // <CampsiteInfo 
                //     campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                //     comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                // />
            );
        };

        return (
            <div>
                {/* <Header /> */}
                <Switch>
                    <Route exact path='/store' render={() => <Store products={this.state.accessories} />} />
                    <Route path='/store/:productId' component={ProductWithId} />
                    {/* <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} /> */}
                    <Redirect to='/store' />
                </Switch>
            </div>
        );
    }

}

export default Main;