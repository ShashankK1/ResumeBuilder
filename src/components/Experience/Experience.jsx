import React, { useContext} from 'react';
import AppContext from '../../utility/ContextApis';
import ExperienceForm from '../ExperienceForm/ExperienceForm'

const Experience = () => {

    const [store, dispatch] = useContext(AppContext);
    const forms = store.experience;

    const onChangeHandle = (data, idx)=>{
        forms[idx] = data;
        dispatch({
            type: 'experience',
            data: forms
        });
    }

    const addExperience = () => {

        dispatch({
            type:'experience',
            data:[
                ...forms,
                {
                    [`companyName${forms.length}`]:'',
                    [`role${forms.length}`]:'',
                    [`work${forms.length}`]:'',
                    [`jobduration${forms.length}`]:''
                }
            ]
        });
    }

    const deleteHandler = (idx) => {
        
        forms.splice(idx, 1);
        dispatch({
            type: 'experience',
            data: forms
        })
    }

    return (
    <div className='d-flex flex-column'>
        {
            forms.map((data, idx)=>{
                return (<ExperienceForm head={"Experience "+(idx+1)}
                     id={idx} key={idx} data={forms[idx]} onChangeHandle={(e, idx)=>onChangeHandle(e, idx)}
                     deleteHandler={(idx)=>{deleteHandler(idx)}}/>)
            })
        }
        <button className='btn btn-success' onClick={addExperience}>Add Experience</button>
    </div>
    )
}

export default Experience;