import { useState } from 'react'

// Button

const Button = (props) => {
  return (
    <div>
      <h1>Puntuame</h1>
      <button onClick={props.handleClickGood}>
        {props.text[0]}
      </button>
      <button onClick={props.handleClickNeutral}>
        {props.text[1]}
      </button>
      <button onClick={props.handleClickBad}>
        {props.text[2]}
      </button>
    </div>
  )
}

// review components

const Reviews = (props) => {
  return (
    <thead>
      <tr>
        <td>Número de reviews {props.text[0]}: </td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Número de reviews {props.text[1]}: </td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Número de reviews {props.text[2]}: </td>
        <td>{props.bad}</td>
      </tr>
    </thead>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Porcentaje = (props) => {
  return (
    <tbody>
      <StatisticLine text="Total Reviews" value={props.totalReviews} />
      <StatisticLine text="Promedio de rating" value={(props.good + props.neutral * 0.5 + props.bad * -0.5) / props.totalReviews} />
      <StatisticLine text="Porcentaje de reviews positivas" value={(props.good * 100) / props.totalReviews + '%'}/>
    </tbody>
  )
}

// Statistics

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <p>No se han realizado reviews aún.</p>
    )
  }
  return (
    <table>
      <Reviews good={props.good} neutral={props.neutral} bad={props.bad} text={props.text} />
      <Porcentaje good={props.good} neutral={props.neutral} bad={props.bad} totalReviews={props.totalReviews} />
    </table>
  )
}

const App = () => {

  const reviews = ['good', 'neutral', 'bad']
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [allClicks, setAll] = useState([])

  const goodReview = () => {
    setGood(good + 1)
    setAll([...allClicks, reviews[0]])
  }
  const neutralReview = () => {
    setNeutral(neutral + 1)
    setAll([...allClicks, reviews[1]])
  }
  const badReview = () => {
    setBad(bad + 1)
    setAll([...allClicks, reviews[2]])
  }
  


  return (
    <div>
      <Button handleClickGood={goodReview} handleClickNeutral={neutralReview} handleClickBad={badReview} text={reviews} />
      <Statistics good={good} neutral={neutral} bad={bad} totalReviews={good + neutral + bad} allClicks={allClicks} text={reviews}/>
    </div>
  )
}

export default App