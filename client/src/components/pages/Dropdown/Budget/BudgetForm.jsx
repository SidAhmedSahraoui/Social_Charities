import React, { useState } from "react";
import style from "./budgetForm.module.css";

//Redux
import { connect } from "react-redux";
import { getBudget } from '../../../../redux/actions/budgetActions';

const BudgetForm = ({ getBudget }) => {
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    setBudget(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (budget === "") {
      setError("Must not be empty");
      return;
    }
    getBudget(budget);
    setBudget("");
  };

  return (
    <div className={`${style.budgetForm} mt-5`}>
      <p className="label">Budget</p>
      <form onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <input
            type="number"
            placeholder="Add your budget..."
            className="input"
            value={budget}
            onChange={handleChange}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">
            Add Budget
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getBudget: budget => dispatch(getBudget(budget))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BudgetForm);
