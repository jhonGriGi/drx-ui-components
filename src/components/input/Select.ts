import styled from "styled-components";
import { CommonComponentProps } from "../../types";
import {
    BLACK_DISABLED,
    BOX_SHADOW_COLOR,
    COLORS_PALETTE,
    WHITE,
} from "../../colors";

export const DrxSelect = styled.select<CommonComponentProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding :${(props) => props.$padding ? props.$padding : ''};
    margin :${(props) => props.$margin ? props.$margin : ''};

    border-radius: 8px;
    border: 1px solid ${COLORS_PALETTE.black.nine};
    color: ${COLORS_PALETTE.black.eight};
    background-color: ${WHITE};

    &:read-only {
        border-color: ${COLORS_PALETTE.black.nine};
        color: ${COLORS_PALETTE.black.five};
        background-color: ${BLACK_DISABLED};
    }

    &:invalid {
        background-color: ${WHITE};
        border-color: ${COLORS_PALETTE.red.primary};
        color: ${COLORS_PALETTE.black.eight};
    }

    &:valid {
        border-color: ${COLORS_PALETTE.black.nine};
        background-color: ${WHITE};
        color: ${COLORS_PALETTE.black.five};
    }

    &:active {
        color: ${COLORS_PALETTE.black.three};
        border-color: ${COLORS_PALETTE.violet.primary};
        box-shadow: 2px 4px 10px 0 ${BOX_SHADOW_COLOR};
    }

    &:checked,
    &:focus,
    &:focus-visible {
        color: ${COLORS_PALETTE.black.three};
        border-color: ${COLORS_PALETTE.violet.primary};
        box-shadow: 2px 4px 10px 0 ${BOX_SHADOW_COLOR};
        outline: none;
    }
`;

export const DrxOption = styled.option<CommonComponentProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding :${(props) => props.$padding ? props.$padding : ''};
    margin :${(props) => props.$margin ? props.$margin : ''};

    color: ${COLORS_PALETTE.black.eight};
    border-radius: 8px;
    border: none;
    background-color: ${WHITE};

    &:hover,
    &:focus {
        background-color: ${BLACK_DISABLED};
        color: ${COLORS_PALETTE.black.four};
    }

    &:checked,
    &:active {
        background-color: ${COLORS_PALETTE.violet.primary};
        color: ${WHITE};
    }
`;
