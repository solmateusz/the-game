import { colors } from "palette/colors";
import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    background-color: ${() => colors.primary};
    cursor: pointer;
    color: ${() => colors.background};

    &:hover {
        background-color: ${() => colors.secondary};
    }
`;