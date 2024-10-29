import {useState} from "react";

const GoalForm = ({onAddGoal}) => {

    const [goal, setGoal] = useState({
        name: '',
        by: ''
    });


    const onHandleForm = (e) => {
        e.preventDefault();
        onAddGoal(goal);
        setGoal({
            name: '',
            by: ''
        });
    };

    const onChangeGoalName = (e) => {
        setGoal({
            ...goal,
            name: e.target.value,
        })
    };

    const onChangeGoalBy = (e) => {
        setGoal({
            ...goal,
            by: e.target.value,
        })
    };

    return (
        <>
            <h1>
                Add a New Goal
            </h1>
            <form onSubmit={onHandleForm}>
                <input onChange={onChangeGoalName} value={goal.name} placeholder="Name of your goal" type="text"/>
                <input onChange={onChangeGoalBy} value={goal.by} placeholder="By" type="text"/>
                <button type="submit">Add Goal</button>
            </form>
            <br/>
        </>
    );
};

const GoalItem = (props) => {
    return (
        <ul>
            {
                props.goals.map((goal, index) => {
                    return <li key={index}><p>{goal.name} by {goal.by}</p></li>
                })
            }
        </ul>
    );
}

function App() {

    const [goals, setGoals] = useState([]);

    const onAddGoal = (goal) => {
        if (!goal.name || !goal.by) {
            alert('Please enter a valid goal and by date');
            return;
        }
        if (goals.find((_goal) => _goal.name = goal.name)) {
            alert('Goal already exists');
            return;
        }
        setGoals([
            ...goals,
            goal
        ]);
    };

    return (
        <>
            <GoalForm onAddGoal={onAddGoal}/>
            <GoalItem goals={goals}/>
        </>
    )
}

export default App
