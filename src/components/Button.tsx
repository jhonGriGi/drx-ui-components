import styled from "styled-components";
import { COLORS_PALETTE } from "../colors";
import { CommonComponentProps } from "../types";

export const Button = styled.button<CommonComponentProps>`
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
`;

export const PrimaryButton = styled(Button)<CommonComponentProps>`
    border-radius: 8px;
    background-color: ${COLORS_PALETTE.violet.primary};
    color: #fff;

    &:active {
        background-color: ${COLORS_PALETTE.violet.two};
    }

    &:hover {
        background-color: ${COLORS_PALETTE.violet.four};
    }

    &:disabled {
        background-color: ${COLORS_PALETTE.violet.ten};
        color: ${COLORS_PALETTE.violet.eight};
    }
`;

export const SecondaryButton = styled(Button)<CommonComponentProps>`
    border-radius: 8px;
    background-color: #fff;
    border: 1.5px solid ${COLORS_PALETTE.violet.primary};
    color: ${COLORS_PALETTE.violet.primary};

    &:active {
        background-color: ${COLORS_PALETTE.violet.two};
        color: #fff;
    }

    &:disabled {
        border: 1.5px solid ${COLORS_PALETTE.violet.ten};
        color: ${COLORS_PALETTE.violet.eight};
    }

    &:hover {
        box-shadow: #5206e933 2px 4px 10px 0;
        transition: box-shadow 0.3s ease;
    }
`;

export const TertiaryButton = styled(Button)<CommonComponentProps>`
    border: none;
    background-color: #fff;
    color: ${COLORS_PALETTE.violet.primary};

    &:active {
        color: ${COLORS_PALETTE.violet.two};
    }

    &:disabled {
        color: ${COLORS_PALETTE.violet.eight};
    }

    &:hover {
        color: ${COLORS_PALETTE.violet.primary};
        text-shadow: 2px 4px 10px #5206e9;
    }
`;
