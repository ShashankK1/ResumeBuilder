import React, { useContext } from 'react'
import AppContext from '../../utility/ContextApis';
import EducationForm from '../EducationForm/EducationForm';

const Education = () => {

    const [store, dispatch] = useContext(AppContext);
    const forms = store.education;

    const onChangeHandle = (data, idx)=>{
        forms[idx] = data;
        dispatch({
            type: 'education',
            data: forms
        });
    }

    const addEducation = () => {

        dispatch({
            type:'education',
            data:[
                ...forms,
                {
                    [`institute${forms.length}`]:'',
                    [`qualification${forms.length}`]:'',
                    [`marks${forms.length}`]:'',
                    [`duration${forms.length}`]:'',
                }
            ]
        });
    }

    const deleteHandler = (idx) => {
        dispatch({
            type: 'education',
            data: forms.filter((val, idx2) => idx2!==idx)
        })
    }

    return (
    <div className='d-flex flex-column'>
        {
            forms.map((data, idx)=>{
                return (<EducationForm head={"Education "+(idx+1)}
                     id={idx} key={idx} data={forms[idx]} onChangeHandle={(e, idx)=>onChangeHandle(e, idx)}
                     deleteHandler={(idx)=>{deleteHandler(idx)}}/>)
            })
        }
        <button className='btn btn-success' onClick={addEducation}>Add education</button>
    </div>
    )
}

export default Education