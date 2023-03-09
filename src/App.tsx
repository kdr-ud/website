import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript and My Grandpa
                </header>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
                <hr />
                Joseph Casagrande Hello World!
                <img
                    src="https://d.newsweek.com/en/full/1603394/joe-biden.webp?w=466&h=311&f=e5a40b9c0e107f02bf72ce7c745a96a6"
                    alt="My Grandpa"
                />
                <h1> Cool things he does... </h1>
                <ul>
                    <li>Go golfing</li>
                    <li>Bring peace</li>
                    <li>Be named Joe (after me)</li>
                </ul>
            </div>
            <div style={{ border: "5px solid blue", padding: "10px" }}>
                <Container>
                    <Row>
                        <Col>
                            <div id="rectangle"></div>I Love HTML!
                        </Col>
                        <Col>
                            <div id="rectangle"></div>I Love CSS!
                        </Col>
                    </Row>
                    <Row>
                        <Col>HTML helped me write this!</Col>
                        <Col>CSS helped me style this!</Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
