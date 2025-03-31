import './styles.css'

export function Card(){
  return (
  <div className="card">
    <div className="card__content">
      {/* face da frente do card */}
      <div className="card__face card__face--front">Front</div>

      {/* Face da parte de tras do card */}
      <div className="card__face card__face--back">Back</div>
    </div>
  </div>
  );
}