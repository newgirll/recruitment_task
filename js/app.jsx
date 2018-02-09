import React from 'react';
import ReactDOM from 'react-dom';

import messages from './data';

document.addEventListener("DOMContentLoaded", function(){



    class TypeWriter extends React.Component {
        constructor(props){
            super(props);
            this.counter = 0;
         
            this.state = {
                text1: this.props.msgFirst[0],
                text2: " ",
                index: this.props.index,
                next: this.props.nextSent
            }

        }

        componentDidMount(){
            let sentence = '';
            let letters = '';
            //pojawienie się pierwszego paragrafu w interwałach
            this.intervalFirst = setInterval(()=>{
                this.counter ++;
                if(this.counter < this.props.msgFirst.length){
                    this.setState({
                        text1: this.state.text1 + this.props.msgFirst[this.counter],
                    });
                }

            }, this.props.interval)

            //opóźnienie pojawienia się drugiego paragrafu w interwałach
            this.time = setTimeout(()=>{
                this.intervalSec = setInterval(()=>{
                    sentence = [...this.props.msgSec[this.state.index]]
                    letters += [...sentence[letters.length]]
                    if(this.state.next === false || letters.length < sentence.length){
                        this.setState({
                            text2: letters,
     
                        })
                    }
                    if(letters.length === sentence.length || this.state.next === true){
                        this.setState({
                            text2: '',
                            index: this.state.index + 1,
                   
                        })
                     
                    }
                }, this.props.interval)
               console.log(this.state.index)
            },this.props.interval * this.props.msgFirst.length )
        }

        componentWillUnmount(){
            clearInterval(this.intervalFirst);
            clearInterval(this.intervalSec)
        }
        render(){
            return(
                <div className ="main-banner">
                    <p className="main-banner__text">{this.state.text1}
                        <span className="main-banner__text--span"> | </span>
                    </p>
               
                    <p className="main-banner__text">{this.state.text2}
                        <span className="main-banner__text--span"> | </span>
                    </p>
                   
                </div>
            );
        }
    };

    class App extends React.Component {
        render(){
            return <TypeWriter counter={0} msgSec={messages} msgFirst={"Pierwszy kod do sukcesu. "} index={0} interval={200} nextSent={false}/>;
            
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})