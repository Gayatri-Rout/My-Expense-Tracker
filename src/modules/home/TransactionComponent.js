import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
font-family: 'Poppins', sans-serif;
padding: 0.5rem 1 rem;
font-size:1.2rem;
width:100%;
gap:0.5rem;
font-weight:600;

& .search{
    padding:0.5rem;
    padding-left:1rem;
    border-radius: 25px;
    outline:none;
    border: 1px solid black;
    font-family: 'Poppins', sans-serif;
    font-size:1.2rem;
}
`;

const Cell = styled.div`
display:flex;
flex-direction: row;
padding: 0.5rem 1rem;
font-size:1rem;
border-radius:25px;
border-right: 4px solid ${(props) => (props.isExpense? "red":"green")};
`;


const TransactionCell = (props) => {
    return (
        <Cell isExpense={props.payload?.type === "EXPENSE"}>
            <span>{props.payload.desc}</span>
            <span>₹{props.payload.amount}</span>
        </Cell>
    );
};

const TransactionComponent = (props) => {
    return (
        <Container>
            Transactions
            <input class="search" placeholder='Search'></input>
            {props.transactions?.length ? props.transactions.map((payload) => (<TransactionCell payload={payload} />)) : ""}
        </Container>
    );
};

export default TransactionComponent