import React, {useState} from 'react';

const initialCounters = [
    {id: 1, title: 'Tesla', count: 58},
    {id: 2, title: 'BMW', count: 38},
    {id: 3, title: 'Nikola', count: 46}
];

function App() {

    const [counters, setCounters] = useState(initialCounters);
    const [list, setList] = useState('');
    const [title, setTitle] = useState('');


    const add = () => {
        const newAdd = [...counters, {title: list, count: 0, id: Math.random()}];


        setCounters(newAdd);
        setList('');
        setTitle('');
    }

    const buttonAdd = () => {
        add(list);
        setList('');
    }


    const deletById = (id) => {
        setCounters(counters.filter(el => el.id !== id));
    }
    const onChange = (id, val) => {

        setCounters(counters.map(el => {
            if (el.id === id) {
                return {count: el.count + val, id: el.id, title: el.title}
            }
            return el
        }))

    }
    return (
        <div>


            <input type='text' placeholder='Counter title' onChange={(e) =>
                setCounters(e.target.value)} value={list}/>

            <input type="number" placeholder='Counter value' onChange={(e) =>
                setCounters(e.target.value)} value={title}/>

            <button onClick={()=>buttonAdd()}>Add</button>
            <button onClick={()=>setCounters([])}>delet add</button>

            <ul>
                {counters.map(el => <li key={el.id}>{el.title}
                    <button onClick={() => onChange(el.id, -1)}>-</button>
                    {el.count}
                    <button onClick={() => onChange(el.id, 1)}>+</button>
                    <button onClick={() => deletById(el.id)}>delet</button>
                    <button>up</button>
                    <button>down</button>
                </li>)}
            </ul>
        </div>
    );
}

export default App;
