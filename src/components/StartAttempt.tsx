import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [testing, setTesting] = useState<boolean>(false);

    function startTest(): void {
        setTesting(true);
        setAttempts(attempts - 1);
    }
    function endTest(): void {
        setTesting(false);
    }
    return (
        <div>
            <div>
                Testing: <span>{testing}</span>
            </div>
            <div>
                <Button
                    onClick={startTest}
                    disabled={testing || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={endTest} disabled={!testing}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={testing}
                >
                    Mulligan
                </Button>
                {attempts}
            </div>
        </div>
    );
}
