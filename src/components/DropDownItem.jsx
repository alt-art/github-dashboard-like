import styled from 'styled-components';

const DropDownItem = styled.a`
    display: block;
    background-color: #ff9898;
    width: 100%;
    padding: 3px 10px;
    text-decoration: none;
    cursor: pointer;
    color: #ececec;
    margin: 2px 0;
    &:hover {
        background-color: #624cab;
    }
`;

export default DropDownItem;
