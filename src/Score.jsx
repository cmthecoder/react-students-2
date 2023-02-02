const Score = (props) => {
  return (
    <div>
      <h2>{props.score.date}</h2>
      <h2>{props.score.score}</h2>
    </div>
  );
}

export default Score;