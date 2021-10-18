import styled from "styled-components";

export const Donate = styled.section`
    background-color: #38ACFF;

    .donate-area {
        margin: 60px 160px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        
        &-text {
            h4 {
                color: #FFFFFF;
                font-size: 40px;
                font-weight: 700;
            }
        }

        &-button {
            button {
                color: #FFFFFF;
                font-size: 20px;
                font-weight: 700;
                background-color: #FF40A7;
                border: none;
                padding: 21px 75px;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
`;
