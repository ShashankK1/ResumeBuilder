import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Skills.css';
import AppContext from '../../utility/ContextApis';
const suggestions = [
    {
        id: 'Reactjs',
        label: 'Reactjs'
    },
    {
        id: 'Angularjs',
        label: 'Angularjs'
    },
    {
        id: 'Javascript',
        label: 'Javascript'
    },
    {
        id: 'C++',
        label: 'C++'
    },
    {
        id: 'Python',
        label: 'Python'
    },
    {
        id: 'Nodejs',
        label: 'Nodejs'
    }
];


const Skills = () => {
    const [store, dispatch] = useContext(AppContext);
    const tags = store.skills;


    const inputChange = (newVal) => {
        if (newVal) {
            dispatch({
                type: 'skills',
                data: [...tags, newVal.label]
            });
        }
    }

    

    return (
        <div className='d-flex flex-column'>
            <Autocomplete
                id="combo-box-demo"
                options={suggestions}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                onChange={(e, newVal) => {
                    inputChange(newVal);
                }}
            />
            <div className='d-flex'>
                {
                    tags.map((val, idx) => (
                        <div key={idx} className='d-flex skill'>
                            {val}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills