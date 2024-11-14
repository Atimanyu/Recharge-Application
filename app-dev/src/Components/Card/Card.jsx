import './Card.css'
// eslint-disable-next-line react/prop-types
function Card({price,data,validity,special}) {
  return (
    <div className="card">
        <div className="card-top">
            <h1>₹{price}</h1>
            <h3><b>{data}GB/day</b> data</h3>
            <h3><b>{validity} days</b> validity</h3>
            <button>buy</button>
        </div>
        <div className="card-bottom">
            <ul>
                <li>truly unlimited calls</li>
                <li>weekend data rollover</li>
                <li>100 SMS/day</li>
                {special!='null' && <li>{special}</li>}
            </ul>
        </div>
    </div>
  )
}

export default Card