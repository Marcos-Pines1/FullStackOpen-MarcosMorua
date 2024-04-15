//header code

const Header = (props) => {
  console.log(props)
  return(
    
    <header>
      <h1>{props.course}</h1>
    </header>

  )
}

// Componente "Content" para crear el codigo de los ejercicios y los nombres

const Content = (props) => {
  console.log(props)
  
  const Part = (props) => {
      return(
          <p> 
              {props.part.name} {props.part.exercises}
          </p>
        )
  }

  // Componente "Part" para la creacion de "<p>"

  return (
    <main>
      <Part  part={props.part1}/>
      <Part  part={props.part2}/>
      <Part  part={props.part3}/>
    </main>
  )
}

// Total code

const Total = (props) => {
  console.log(props)
  const totalExercises= props.parts.reduce((total, parts) => total + parts.exercises, 0)
  return(
    
    <footer>
      <p>Number of exercises {totalExercises}</p>
    </footer>

  )
}

// app code 

const App = () => {

  const course = 'Half Stack application development '

  // datos para los componentes

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total parts={parts} />
    </div>
  )
}

export default App


/*





const Header = (props) => {
  console.log(props)
  return(
    
    <header>
      <h1>{props.course}</h1>
    </header>

  )
}

const Content = (props) => {
  console.log(props)
  const Part = (props) => {
      return(
          <p> 
              {props.part1} {props.exercises1} 
              {props.part2} {props.exercises2} 
              {props.part3} {props.exercises3}
          </p>
        )
  }

  return (
    <main>
      <Part  part1={props.part1} exercises1={props.exercises1}/>
      <Part  part2={props.part2} exercises2={props.exercises2}/>
      <Part  part3={props.part3} exercises3={props.exercises3}/>
    </main>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    
    <footer>
      <p>Number of exercises {props.exercises1}</p>
    </footer>

  )
}

const App = () => {

  const course = 'Half Stack application development '

  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1 + exercises1} part2={part2 + exercises2} part3={part3 + exercises3} />
      <Total exercises1={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App

*/