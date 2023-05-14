import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <ul className="goal-item" onClick={deleteHandler}>
      {props.children}
    </ul>
  );
};

export default CourseGoalItem;
