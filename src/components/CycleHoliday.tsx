import React, { useState } from "react";
import { Button } from "react-bootstrap";

type HolidayType =
    | "christmas"
    | "easter"
    | "vday"
    | "thanksgiving"
    | "halloween";

const HOLIDAY_BY_DATE: Record<HolidayType, HolidayType> = {
    christmas: "easter",
    easter: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "vday",
    vday: "christmas"
};

const HOLIDAY_BY_ALPHA: Record<HolidayType, HolidayType> = {
    vday: "easter",
    easter: "halloween",
    halloween: "thanksgiving",
    thanksgiving: "christmas",
    christmas: "vday"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayType>("christmas");

    function changeHolidayD(): void {
        const newHoliday = HOLIDAY_BY_DATE[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayA(): void {
        const newHoliday = HOLIDAY_BY_ALPHA[holiday];
        setHoliday(newHoliday);
    }

    function display(holiday: HolidayType): string {
        let displayStr = "";
        if (holiday === "christmas") {
            displayStr = "🎄";
        } else if (holiday === "easter") {
            displayStr = "🐇";
        } else if (holiday === "thanksgiving") {
            displayStr = "🦃";
        } else if (holiday === "vday") {
            displayStr = "💜";
        } else {
            displayStr = "🎃";
        }
        return displayStr;
    }

    return (
        <div>
            <div>
                <div>
                    <span>Holiday: {display(holiday)}</span>
                </div>
                <Button onClick={changeHolidayD}>Advance By Year</Button>
                <Button onClick={changeHolidayA}>Advance By Alphabet</Button>
            </div>
        </div>
    );
}
