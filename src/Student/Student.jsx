import Score from "../Score";

const Student = (props) => {
  console.log(props.student.scores)
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h2>{props.student.bio}</h2>
      <h2>Score</h2>
      {props.student.scores.map(score => {
        return <Score key={score.date} score={score}/>
      })}
    </div>
  );
}

export default Student;