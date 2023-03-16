import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function updateAttempt(request: string) {
        if (parseInt(request) > 0) {
            const newAtt = attempts + parseInt(request);
            setAttempts(newAtt);
        } else {
            const newAtt = attempts;
            setAttempts(newAtt);
        }
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <div>Attempts: {attempts}</div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    use
                </Button>
            </div>
            <div>
                <Button onClick={() => updateAttempt(request)}>gain</Button>
            </div>
        </div>
    );
}
