import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", function(){



    class TypeWriter extends React.Component {
        constructor(props){
            super(props);
            this.counter = 1;
            this.state = {
                text1: "P",
                text2: this.props.courses,
            }
        }

        componentDidMount(){
            this.interval = setInterval(()=>{
                let firstArr = this.props.firstPar.split("");
                console.log(firstArr);
                this.setState({
                    text1: firstArr[this.counter++]         
                });
                clearInterval(this.interval);
            }, 1000)
        }
        render(){
            return(
                <div>
                    <p>{this.state.text1}</p>
                    <span style={{display: 'inline'}}> | </span>
                    <p>{this.state.text2}</p>
                    <span> | </span>
                </div>
            );
        }
    };

    class App extends React.Component {
        render(){
            const coursesArray = ["Zacznij karierę w IT. ", "Naucz się programować. ", "Zostań programistą. ", "Zostań programistą Java. ", "Zostań programistą .NET. ", "Zostań Progrmista Ruby. ", "Zostań programistą Python. ", "Zostań Front-End Developerem. "]
            return <TypeWriter courses={coursesArray} firstPar={"Pierwszy kod do sukcesu. "}/>;
            
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})