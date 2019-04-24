import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import ProgressBar from "./ProgressBar"
import Tagbutton from "./Tagbutton"
import './Quizz.css';

class Quizz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            choice: [],
            percentage: 0,
            progress : ""
        }
    }

    plusStep = (e) => {
        if (this.state.step < 4) {
           
            let result = this.state.choice
            
            result.push(e.target.value)
            this.setState({ choice: result })
            this.setState({
                step: this.state.step + 1,
                percentage: (this.state.choice.length) * 25,
            })
        } else {
            this.setState({
                step: 4,
                percentage: 0,
                progress:"",
            })
        }
    }
    getQuestion = () => {
        let mycmd;
        switch (this.state.step) {
            case 0:
                mycmd = <Question1 plusStep={this.plusStep} />;
                break;
            case 1:
                mycmd = <Question2 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion}/>;
                break;
            case 2:
                mycmd = <Question3 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion}/>;
                break;
            case 3:
                mycmd = <Question4 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion}/>;
                break;
            case 4:
                mycmd  = "";
                if (this.state.progress !== "hidden"){this.setState({progress: "hidden"})};
                break;
            default:
                mycmd = <Question1 />
        }
        return mycmd
    }

    goBackQuestion = (event)=>{
        if (this.state.step < 4){ 
        const choice = this.state.choice
        const ind = choice.findIndex(x => x=== event.target.value) 
        const newChoice =choice
        newChoice.splice(ind, choice.length)
        this.setState({step:ind});
        this.setState({choice : newChoice})
        const newPercentage = (ind) * 25
        this.setState({percentage : newPercentage})
                
    }
             
        }
       

    render() {
        return (
            <Container className="Quizz">
                <Row>
                    <Col className="text-center">
                        <div>
                        <Tagbutton choice={this.state.choice} step = {this.state.step} goBackQuestion={this.goBackQuestion}/>
                        <ProgressBar progress = {this.state.progress} percentage={this.state.percentage} />
                        {this.getQuestion()}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Quizz