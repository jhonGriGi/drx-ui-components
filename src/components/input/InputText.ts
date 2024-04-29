import styled from "styled-components";
import { CommonComponentProps } from "../../types";
import {
    BLACK_DISABLED,
    BOX_SHADOW_COLOR,
    COLORS_PALETTE,
    WHITE,
} from "../../colors";

export const DrxInputText = styled.input<CommonComponentProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    padding: ${(props) => (props.$padding ? props.$padding : "")};
    margin: ${(props) => (props.$margin ? props.$margin : "")};

    border-radius: 8px;
    outline: none;
    background-color: ${WHITE};
    border: 1px solid ${COLORS_PALETTE.black.nine};
    color: ${COLORS_PALETTE.black.five};

    &::placeholder {
        color: ${COLORS_PALETTE.black.eight};
    }

    &:invalid {
        border-color: ${COLORS_PALETTE.red.primary};
    }

    &:disabled {
        border-color: ${COLORS_PALETTE.black.nine};
        background-color: ${BLACK_DISABLED};
        color: ${COLORS_PALETTE.black.five};
    }

    &:focus,
    &:focus-visible {
        color: ${COLORS_PALETTE.black.three};
        border-color: ${COLORS_PALETTE.violet.primary};
        box-shadow: 2px 4px 10px 0 ${BOX_SHADOW_COLOR};
    }

    &:checked {
        color: ${COLORS_PALETTE.black.five};
        border-color: ${COLORS_PALETTE.green.two};
    }
`;
