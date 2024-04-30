import styled from "styled-components";
import { HiOutlineHeart } from 'react-icons/hi'

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 32px 16px;
margin: 16px;
border: 1px solid #C7CFCC;
border-radius: 5px;
`
export const Estado = styled.div`
font-size: 14px;
margin-bottom: 10px;
color: var(--text2);
`
export const Row = styled.div`
display: flex;
justify-content: space-between;
>h1{
    width: 100%;
    font-size:22px;
    line-height:25.9px;
    color: var(--text1);
    font-weight:500;
}
`
export const HeartIcon = styled(HiOutlineHeart)`
width: 30px;
height: 30px;
color: blue;
cursor: pointer;
margin-left: 16px; 
`
export const Price = styled.div`
font-size: 36px;
line-height: 36px;
padding: 24px 0;
font-weight: inherit;
color: var(--text1)
`
export const Card = styled.div`
display: flex;
margin-bottom: 2rem;
>div{
    margin-left: 8px;
    display: flex;
    flex-direction: column;
}
`

export const ButtonCard = styled.div`
margin-top: 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 15px; 
border-radius: 4px;
padding: 12px 10px;
outline: 0;
cursor: pointer;
color: var(--blue1);
`
export const Button = styled.div`
margin-top: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px; 
border-radius: 4px;
padding: 12px 10px;
outline: 0;
cursor: pointer;
background-color: #89F8D6;
color: var(--blue1);
transition: all 300ms ease-in-out;
&.solid{
    background-color: #B9F5E3;
    color: var(--white);
}
&.solid.hover{
    background-color: var(--blue2);
}
`
