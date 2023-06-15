import React, { useState } from 'react'

const EducationForm = (props) => {
    
    const [education, setEducation] = useState(props.data);

    const changeHandler = (e)=>{
        setEducation(prevEducation=>({
            ...prevEducation,
            [e.target.id]: e.target.value,
        }));
        onChangeHandle({
            ...education,
            [e.target.id]: e.target.value,
        })
    }

    const onChangeHandle = (obj)=>{
        props.onChangeHandle(obj, props.id);
    }

    const deleteHandler = (idx) => {
        props.deleteHandler(idx);
    }


  return (
    <div>
        <div className='d-flex justify-content-between'>
            <strong>{ education[`institute${props.id}`].length > 0 ?  education[`institute${props.id}`] :props.head}</strong>
            <button className='btn btn-danger' onClick={()=>{deleteHandler(props.id)}}>Delete education</button>
        </div>
        <form className='d-flex flex-column'>
            <div className="form-group">
                <label htmlFor={'institute'+props.id}>Institute Name</label>
                <input type="text" className="form-control" id={"institute"+props.id} placeholder="XYZ..." 
                value={education[`institute${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"qualification"+props.id}>Qualification</label>
                <input type="text" className="form-control" id={"qualification"+props.id} placeholder="B.Tech" 
                value={education[`qualification${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"marks"+props.id}>Marks</label>
                <input type="text" className="form-control" id={"marks"+props.id} placeholder="95%" 
                value={education[`marks${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"duration"+props.id}>Duration</label>
                <input type="text" className="form-control" id={"duration"+props.id} placeholder="2019-2023" 
                value={education[`duration${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
        </form>
        <hr/>
        </div>
  )
}

export default EducationForm