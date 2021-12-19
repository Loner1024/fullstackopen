import React from "react";

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = (props) => {
    var sum = 0
    for (var i = 0; i < props.data.length; i++) {
        sum += props.data[i].exercises
    }
    return (
        <p>Number of exercises {sum}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const data = [
        {
            part: 'Fundamentals of React',
            exercises: 10
        },
        {
            part: 'Using props to pass data',
            exercises: 7
        },
        {
            part: 'State a component',
            exercises: 14
        }
    ]

    const list = data.map((item) =>
        <Content part={item.part} exercises={item.exercises} />
    );

    return (
        <div>
            <Header course={course} />
            {list}
            <Total data={data} />
        </div>
    )
}

export default App;
