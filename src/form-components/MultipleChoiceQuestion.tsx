import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [favorite, setFavorite] = useState<string>(options[0]);
    const ans = favorite === expectedAnswer ? "✔️" : "❌";

    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setFavorite(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="mcQuestion">
                <Form.Label>What is 1 + 1?</Form.Label>
                <Form.Select value={favorite} onChange={updateFavorite}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                    ;
                </Form.Select>
            </Form.Group>
            The answer is: {ans}.
        </div>
    );
}
