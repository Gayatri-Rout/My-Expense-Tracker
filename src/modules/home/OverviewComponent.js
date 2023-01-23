import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin:1rem;
margin-top:-1rem;
font-family: 'Poppins', sans-serif;
width:100%;
border-radius:25px;
border: 1px solid black;
padding: 2.5rem;
`;

const BalanceBox = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
font-size: 1.2rem;
font-weight: 600;
align-items:center;
width:100%;
font-family: 'Poppins', sans-serif;
`;

const AddTransaction = styled.div`
background: black;
color:white;
padding:0.5rem 1.5rem;
border-radius: 25px;
cursor:pointer;
font-size: 1rem;
font-weight: bold;
font-family: 'Poppins', sans-serif;
text-align:center;
`;

const AddTransactionContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 25px;
border: 1px solid black;
padding: 1rem;
gap: 1rem;
width: 100%;
margin:1rem;
font-family: 'Poppins', sans-serif;

& input{
    outline:none;
    padding:0.5rem 1.5rem;
    border-radius: 25px;
    border: 1px solid black;
    font-size:1rem;
    font-family: 'Poppins', sans-serif;
}
`;

const RadioBox = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
width:100%;
font-family: 'Poppins', sans-serif;
font-size:1rem;
& input{
   margin-right:1rem;
}
& label{
    margin-right:3rem;
 }
`;

const ExpenseContainer = styled.div`
display:flex;
flex-direction: row;
gap: 1rem;
margin:1rem;
margin-top:1.5rem;
width:100%;
`;

const ExpenseBox = styled.div`
display:flex;
flex-direction: column;
border-radius: 25px;
border: 1px solid black;
padding: 1rem;
width: 10rem;
font-family: 'Poppins', sans-serif;
text-align:center;
font-size:1.2rem;
font-weight: 600;
& span{
    color: ${(props)=> props.isIncome?'green':'red'}
}
`;

const AddTransactionView = (props) => {
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({ amount: Number(amount), desc, type, id: Date.now() });
        props.toggleAddtxn();
    };

    return (
        <AddTransactionContainer>
            <input placeholder="Amount" value={amount} type="number" onChange={(e) => setAmount(e.target.value)}></input>
            <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)}></input>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)}></input>
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
        </AddTransactionContainer>
    );
};

const OverviewComponent = (props) => {
    const [isAddTxnVisible, toggleAddtxn] = useState(true);
    return (
        <Container>
            <BalanceBox>
                Balance: ₹5000
                <AddTransaction onClick={() => toggleAddtxn(!isAddTxnVisible)}>{isAddTxnVisible ? "CANCEL" : "ADD"}</AddTransaction>
            </BalanceBox>
            {isAddTxnVisible && <AddTransactionView toggleAddtxn={toggleAddtxn} addTransaction={props.addTransaction} />}

            <ExpenseContainer>
            <ExpenseBox isIncome={true}>
                    Income<span >₹5000</span>
                </ExpenseBox>
                <ExpenseBox isIncome={false}>
                    Expense<span >₹5000</span>
                </ExpenseBox>
            </ExpenseContainer>
        </Container>
    );
};

export default OverviewComponent