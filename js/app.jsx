import React from 'react';
import ReactDOM from 'react-dom';

import messages from './data'; // tu jest przechowywana tablica ze zdaniami
import TypeWriter from './typeWriter.jsx';

document.addEventListener("DOMContentLoaded", function(){


    class App extends React.Component {
        render(){
            return <TypeWriter msgFirst={"Pierwszy kod do sukcesu. "} msgSec={messages} interval={200} spanUp={"inline"} spanBottom={"none"}/>;
            
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})