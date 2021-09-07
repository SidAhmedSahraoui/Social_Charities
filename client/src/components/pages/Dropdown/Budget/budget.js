import React from 'react';
import Sidebar from '../../../layout/Sidebar/Sidebar'
import BudgetForm from "./BudgetForm";
import ExpenseForm from "./ExpenseForm";
import ViewCalc from "./ViewCalc";

import { expense } from "./types";

import './budget.css'
const Budget = () => {

    return (
        <div>
            <div className='sid'> 
                  <Sidebar />
            </div>
            
             
            <div className='req'>
                 <div className="cont">
                    <div className="center-container">
                        <h4>Easy budget</h4>
                    </div>
                    <BudgetForm />
                    <ExpenseForm expense={expense} />
                    <span className="border" />
                 <ViewCalc />
                </div>
                
            </div>
           

        </div>
    )
}

export default Budget ;