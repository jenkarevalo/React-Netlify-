import styled from "styled-components";

export const Container = styled.div`
padding: 32px 16px;
margin: 0 16px;
display: flex;
flex-direction: column;
border: 1px solid #C7CFCC;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom: none;

>img{
    height:70%;
    width: 30%;
}

>h5{
    font-size: 15px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5px
}
`