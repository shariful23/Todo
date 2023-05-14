import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styled from "styled-components";


const FormControl = styled.div`
 {
  margin: 0.5rem 0;
}

& label {
  font-weight: bolder;
  display: block;
  margin-bottom: .5rem;

}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 2rem;
  padding: 0 0.25rem;
  border-radius: 1rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input{

  background-color: #ccc;
  border-color: #ff0000;
}
&.invalid label{

  color: #ff0000;
}

`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const showErrorMessage = () =>{
    return <p>Add something</p>
    

  }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      showErrorMessage();
          return;

    }

    props.onAddGoal(enteredValue); 
    setEnteredValue("");   
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && 'invalid'}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
          placeholder="Add your goal"
        />
          {!isValid && showErrorMessage()}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
