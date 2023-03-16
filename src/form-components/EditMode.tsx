import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);

    function updateEMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>Edit Mode</h1>
            <div>
                {student ? (
                    <span>{name} is a student</span>
                ) : (
                    <span> {name} is not a student </span>
                )}
            </div>
            <div>
                <Form.Group controlId="inputAnswer">
                    <div>
                        <Form.Check
                            type="switch"
                            id="edit-check"
                            label="Edit Mode"
                            checked={edit}
                            onChange={updateEMode}
                        />
                    </div>
                    {edit && (
                        <div>
                            <div>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                    disabled={!edit}
                                />
                            </div>

                            <Form.Check
                                type="switch"
                                id="student-check"
                                label="Student?"
                                checked={student}
                                onChange={updateStudent}
                                disabled={!edit}
                                hidden={!edit}
                            />
                        </div>
                    )}
                </Form.Group>
            </div>
        </div>
    );
}
