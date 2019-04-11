import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import ProgressBar from "./ProgressBar"
import './Quizz.css';

class Quizz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            choice: [],
            percentage: 0,
        }
    }

    plusStep = () => {
        if (this.state.step < 4) {
            this.setState({
                step: this.state.step + 1,
                percentage: this.state.percentage + 25
            })
        } else {
            this.setState({
                step: this.state.step - 3,
                percentage: 0
            })
        }
    }

    getQuestion = () => {
        let mycmd;
        switch (this.state.step) {
            case 1:
                mycmd = <Question1 StepPlus={this.plusStep} />;
                break;
            case 2:
                mycmd = <Question2 StepPlus={this.plusStep} />;
                break;
            case 3:
                mycmd = <Question3 StepPlus={this.plusStep} />;
                break;
            case 4:
                mycmd = <Question4 StepPlus={this.plusStep} />;
                break;
            default:
                mycmd = <Question1 />
        }
        return mycmd
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="Quizz">
                            <ProgressBar percentage={this.state.percentage} />
                            {this.getQuestion()}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Quizz;