import React, { useState } from 'react'

const ExperienceForm = (props) => {

    const [experience, setExperience] = useState(props.data);

    const changeHandler = (e)=>{
        setExperience(prevExperience=>(
            {
                ...prevExperience,
                [e.target.id]: e.target.value,
            }));
        onChangeHandle({
            ...experience,
            [e.target.id]: e.target.value,
        });
    }

    const onChangeHandle = (obj)=>{
        props.onChangeHandle(obj, props.id);
    }

    const deleteHandler = () => {
        console.log("delete:", props.id);
        props.deleteHandler(props.id);
    }

    return (
        <div>
        <div className='d-flex justify-content-between'>

            <strong>{ experience[`companyName${props.id}`].length > 0 ?  experience[`companyName${props.id}`] :props.head}</strong>
            <button className='btn btn-danger' onClick={deleteHandler}>Delete experience</button>
        </div>
        <form className='d-flex flex-column'>
        
            <div className="form-group">
                <label htmlFor={'companyName'+props.id}>Company Name</label>
                <input type="text" className="form-control" id={"companyName"+props.id} placeholder="XYZ..." 
                value={experience[`companyName${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"role"+props.id}>Role</label>
                <input type="text" className="form-control" id={"role"+props.id} placeholder="Software engineer" 
                value={experience[`role${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"work"+props.id}>Work Description</label>
                <textarea className="form-control" id={"work"+props.id} rows="3"
                value={experience[`work${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor={"jobduration"+props.id}>Duration</label>
                <input type="text" className="form-control" id={"jobduration"+props.id} placeholder="jul 2021 - jul 2022" 
                value={experience[`jobduration${props.id}`]} onChange={(e)=>{changeHandler(e)}}/>
            </div>
        </form>
        <hr/>
        </div>
    )
}

export default ExperienceForm