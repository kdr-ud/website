import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<string>("Short Answer");
    function changeType(): void {
        if (questionType === "Multiple Choice") {
            setQuestionType("Short Answer");
        } else {
            setQuestionType("Multiple Choice");
        }
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questionType}
        </div>
    );
}
