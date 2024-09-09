import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateExpression, evaluateExpression, resetExpression } from './Redux/calculatorSlice';

function Calculator() {
  const dispatch = useDispatch();
  const { expression, result } = useSelector((store) => store.expressionReducer);

  const handleInputChange = (e) => {
    dispatch(updateExpression(e.target.value));
  };

  const handleEvaluate = () => {
    dispatch(evaluateExpression());
  };

  const handleReset = () => {
    dispatch(resetExpression());
  };

  return (
    <div className="calculator-box d-flex flex-column align-items-center border border-primary">
      <h1 className="text-primary mb-4 text-center">Simple Expression Evaluator</h1>
      <input
        type="text"
        value={expression}
        onChange={handleInputChange}
        placeholder="Enter a expression (e.g. 3+5)"
        className="form-control mb-3"
      />
      <div className="d-flex mb-3">
        <button className="btn btn-success me-3" onClick={handleEvaluate}>
          Evaluate
        </button>
        <button className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
      <h3 className="text-secondary">Result: {result !== null ? result : "0"}</h3>
    </div>
  );
}

export default Calculator;
