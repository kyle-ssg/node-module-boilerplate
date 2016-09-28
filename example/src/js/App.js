import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
// import theModule from '../../../';
import theModule from '../../../dist/';
const App = class extends Component {
    displayName: 'App';

    componentDidMount() {
        theModule.doStuff();
    }

    render () {

        return (
            <div>
                Hi2
            </div>
        );
    }
};

App.propTypes = {};

module.exports = App;