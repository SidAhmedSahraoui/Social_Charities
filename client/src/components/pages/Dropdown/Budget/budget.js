import React from 'react';
import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";
import ViewCalc from "./ViewCalc";

import { expense } from "./types";

import './budget.css'
import { Container } from 'react-bootstrap';
const Budget = () => {

    return (
       
           <Container>
                  <div className="center-cont">
                        <h4>Easy budget</h4>
                    </div>
                    <BudgetForm />
                    <ExpenseForm expense={expense} />
                    <span className="border" />
                 <ViewCalc />
                
            </Container>
           

        
    )
}

export default Budget ;