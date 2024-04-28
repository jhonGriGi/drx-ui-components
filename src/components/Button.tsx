import styled from "styled-components";
import { BOX_SHADOW_COLOR, COLORS_PALETTE, TEXT_SHADOW_COLOR, WHITE } from "../colors";
import { CommonComponentProps } from "../types";

export const Button = styled.button<CommonComponentProps>`
    cursor: pointer;
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
`;

export const DrxPrimaryButton = styled(Button)<CommonComponentProps>`
    border: none;
    border-radius: 8px;
    background-color: ${COLORS_PALETTE.violet.primary};
    color: ${WHITE};

    &:hover {
        background-color: ${COLORS_PALETTE.violet.four};
    }

    &:disabled {
        background-color: ${COLORS_PALETTE.violet.ten};
        color: ${COLORS_PALETTE.violet.eight};
    }

    &:active {
        background-color: ${COLORS_PALETTE.violet.two};
    }
`;

export const DrxSecondaryButton = styled(Button)<CommonComponentProps>`
    border-radius: 8px;
    background-color: ${WHITE};
    border: 1.5px solid ${COLORS_PALETTE.violet.primary};
    color: ${COLORS_PALETTE.violet.primary};

    &:active {
        background-color: ${COLORS_PALETTE.violet.two};
        color: ${WHITE};
    }

    &:disabled {
        border: 1.5px solid ${COLORS_PALETTE.violet.ten};
        color: ${COLORS_PALETTE.violet.eight};
    }

    &:hover {
        box-shadow: ${BOX_SHADOW_COLOR} 2px 4px 10px 0;
        transition: box-shadow 0.3s ease;
    }
`;

export const DrxTertiaryButton = styled(Button)<CommonComponentProps>`
    border: none;
    background-color: ${WHITE};
    color: ${COLORS_PALETTE.violet.primary};

    &:disabled {
        color: ${COLORS_PALETTE.violet.eight};
    }

    &:hover {
        color: ${COLORS_PALETTE.violet.primary};
        text-shadow: 2px 4px 10px ${TEXT_SHADOW_COLOR};
    }

    &:active {
        color: ${COLORS_PALETTE.violet.two};
    }
`;
