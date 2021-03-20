import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decCounter, fetchTodos, incCounter, resetCounter} from './redux';


export default function App() {
    // const counter = useSelector(({counter}) => counter.counter)
    const {todos, counter} = useSelector(
        ({todos: {todos}, counter: {counter}}) =>
            ({todos, counter})
    );
    const dispatch = useDispatch()


    useEffect(() => {
        fetchTodos(dispatch)
    }, [dispatch])

    const handleInc = () => dispatch(incCounter())
    const handleDec = () => dispatch(decCounter())
    const handlerReset = () => dispatch(resetCounter())

    return (
        <div>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handlerReset}>reset</button>
            <h1>{counter}</h1>
            {
                todos.map((todo) => <div key={todo.id}>{todo.id} - {todo.title}</div>)
            }
        </div>
    );
}
