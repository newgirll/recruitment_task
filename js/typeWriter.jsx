import React from 'react';
import ReactDOM from 'react-dom';

class TypeWriter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text1: this.props.msgFirst[0], // pierwsza litera ze zdania z pierwszego paragrafu
            text2: " ",
            index: this.props.index,
            span1: this.props.spanUp,
            span2: this.props.spanBottom
        }

    }

    componentDidMount(){

        let counter = 0;

        //pojawienie się pierwszego paragrafu w interwałach
        this.intervalFirst = setInterval(()=>{
            counter ++;
            if(counter < this.props.msgFirst.length){
                this.setState({
                    text1: this.state.text1 + this.props.msgFirst[counter],
                });
            }
            if(counter == this.props.msgFirst.length){
                this.setState({
                    span1: "none",
                    span2: "inline"

                })
            }

        }, this.props.interval)

        //opóźnienie pojawienia się drugiego paragrafu w interwałach
        this.time = setTimeout(()=>{
            let sentence = ''; // przechowywane poszczególne zdania
            let letters = ''; // przechowywane poszczególne litery z danego zdania
            let index = 0;
            this.intervalSec = setInterval(()=>{
                sentence = [...this.props.msgSec[index]]
                letters += [...sentence[letters.length]]
                if( letters.length < sentence.length){
                    this.setState({
                        text2: letters,
                        span: "inline"
                    })
                } else { // gdy długość literek zrówna się z długością zdania to pokazać kolejne zdanie (nie działa)
                    index++
                }
                
            }, this.props.interval)
          
        },this.props.interval * this.props.msgFirst.length )

    }
   
    

    componentWillUnmount(){
        clearInterval(this.intervalFirst);
        clearInterval(this.intervalSec)
    }
    render(){
        const styleSpanUp = {display: this.state.span1}
        const styleSpanBottom = {display: this.state.span2}
        return(
            <div className ="main-banner">
                <p className="main-banner__text">{this.state.text1}
                    <span style={styleSpanUp} className="main-banner__text--span"> | </span>
                </p>
           
                <p className="main-banner__text">{this.state.text2}
                    <span style={styleSpanBottom} className="main-banner__text--span"> | </span>
                </p>
               
            </div>
        );
    }
};

export default TypeWriter;