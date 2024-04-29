import styled from "styled-components";
import { CommonComponentProps } from "../../types";
import { COLORS_PALETTE, WHITE } from "../../colors";

export interface RadioButtonProps extends CommonComponentProps {
    type: "radio";
}

export const DrxRadioButton = styled.input<RadioButtonProps>`
    /* input[type='radio']::after {
        width: ${(props) => props.$width};
        height: ${(props) => props.$height};
        border-radius: 15px;
        background-color: ${COLORS_PALETTE.black.ten};
        content: '';
        display: inline-block;
        outline: none;
    } */
    &:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: ${COLORS_PALETTE.black.ten};
        content: "";
        display: inline-block;
        visibility: visible;
    }

    &:checked:after {
        position: relative;
        content: "";

        display: flex;
        align-items: center;
        justify-content: center;
        width: 10px;
        height: 10px;
        margin: 3px;
        border-radius: 50%;
        background-color: ${COLORS_PALETTE.violet.primary};
        outline: none;

    }

    /* &:checked::before {
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: "";
        display: inline-block;
        visibility: visible;

        content: "";
        display: block;
        width: 10px;
        height: 10px;
        margin: 3px;
        border-radius: 50%;
        background-color: ${COLORS_PALETTE.violet.primary};
    } */

    /* background-color: ${COLORS_PALETTE.black.ten};
    outline: none;

    &:checked {
        background-color: ${COLORS_PALETTE.violet.primary};
    }

    &:disabled {
        background-color: ${COLORS_PALETTE.violet.six};
    } */
    /*
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: ${COLORS_PALETTE.violet.primary} solid 1px;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    background-color: ${WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    &:checked::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        margin: 3px;
        border-radius: 50%;
        background-color: ${COLORS_PALETTE.violet.primary};
    } */
`;
