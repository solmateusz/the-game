import { colors } from "palette/colors";
import styled from "styled-components";

export const Input = styled.input`
    width: 98%;
    height: 3rem;
    color: ${() => colors.background};
    text-align: center;
    font-weight: 600;
    border-radius: 1rem;
    margin-top: 1rem;

    &:focus {
        outline: none;
        background-color: ${() => colors.secondary};
    }
`;