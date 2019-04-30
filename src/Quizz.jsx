import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import ProgressBar from "./ProgressBar"
import Tagbutton from "./Tagbutton"
import DisplayWine from './DisplayWine'

import './Quizz.css';


const imgQuestion = ["image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"]


class Quizz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            choice: [],
            percentage: 0,
            progress: "",
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
                progress: "",
                img: "",
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
                mycmd = <Question2 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion} />;
                break;
            case 2:
                mycmd = <Question3 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion} />;
                break;
            case 3:
                mycmd = <Question4 plusStep={this.plusStep} choice={this.state.choice} goBackQuestion={this.goBackQuestion} />;
                break;
            case 4:
                mycmd = <DisplayWine budget={this.state.choice[2]} dish={this.state.choice[1]} characteristics={this.state.choice[3]} />
                if (this.state.progress !== "hidden") { this.setState({ progress: "hidden" }) };
                break;
            default:
                mycmd = <Question1 />
        }
        return mycmd
    }

    goBackQuestion = (event) => {
        if (this.state.step < 4) {
            const choice = this.state.choice
            const ind = choice.findIndex(x => x === event.target.value)
            const newChoice = choice
            newChoice.splice(ind, choice.length)
            this.setState({ step: ind });
            this.setState({ choice: newChoice })
            const newPercentage = (ind) * 25
            this.setState({ percentage: newPercentage })
        }
    }

    render() {
        return (
            (this.state.step < 4)
                ?
                <Container className="Quizz">
                    <Row className="band">
                        <Col lg="5" className="imgLeft">
                            <img className={this.state.progress} src={imgQuestion[this.state.step]} alt="imgQuestion" />
                        </Col>
                        <Col lg="7" className="text-center textRight">
                            <div className="progressBar2">
                                <ProgressBar progress={this.state.progress} percentage={this.state.percentage} />
                            </div>
                            <div>
                                <Tagbutton choice={this.state.choice} step={this.state.step} goBackQuestion={this.goBackQuestion} />
                            </div>
                            {this.getQuestion()}
                        </Col>
                    </Row>
                </Container> :
                <Container className="Quizz">
                    <Row className="band">
                        <Tagbutton choice={this.state.choice} step={this.state.step} goBackQuestion={this.goBackQuestion} />
                        {this.getQuestion()}
                    </Row>
                </Container>

        )
    }
}
export default Quizz;