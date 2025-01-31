import { useReducer } from "react";
import {Button, View, Text} from 'react-native';


function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'multiply':
            return { ...state, count: state.count * state.count };
        case 'stepAhead':
            return { ...state, step: state.step + 1 };
        default:
            return state;
    }
}

const CounterScreen = () => {

    const initalState = { count: 0, step: 1 }

    const [state, dispatch] = useReducer(reducer, initalState);

    return(
        <View>
            <Button title="Increment" onPress={() => dispatch({type: 'increment'})} />
            <Button title="Decrement" onPress={() => dispatch({type: 'decrement'})} />
            <Button title="Multiply" onPress={() => dispatch({type: 'multiply'})} />
            <Button title="Step Ahead" onPress={() => dispatch({type: 'stepAhead'})} />
                <Text>Count: {state.count}</Text>
                <Text>Step: {state.step}</Text>
        </View>
    )
}

export default CounterScreen;