import React from 'react';
import ReactDOM from 'react-dom';

import messages from './data'; // tu jest przechowywana tablica ze zdaniami
import TypeWriter from './typeWriter.jsx';

document.addEventListener("DOMContentLoaded", function(){


    class App extends React.Component {
        render(){
            return <TypeWriter counter={0} msgSec={messages} msgFirst={"Pierwszy kod do sukcesu. "} index={0} interval={200} spanUp={"inline"} spanBottom={"none"}/>;
            
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})