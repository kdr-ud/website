import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "blue",
    "green",
    "purple",
    "pink",
    "violet"
];

export function ChangeColor(): JSX.Element {
    const [response, setResponse] = useState<string>("red");
    return (
        <div>
            <h1>Change Color</h1>
            <div>
                <p>
                    <span>
                        The current color is{" "}
                        <span
                            data-testid="colored-box"
                            style={{
                                backgroundColor: response,
                                color: "white"
                            }}
                        >
                            {response}
                        </span>
                    </span>
                </p>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setResponse(event.target.value)}
                        id={"colors" + color}
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={response == color}
                    />
                ))}
            </div>
        </div>
    );
}
