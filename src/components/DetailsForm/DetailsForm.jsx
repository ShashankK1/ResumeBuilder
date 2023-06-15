import React, { useContext } from 'react';
import AppContext from '../../utility/ContextApis';
import './DetailsForm.css';




const DetailsForm = (props) => {
    const [store, dispatch] = useContext(AppContext);
    const details = store.details;


    const handleChange = (e) => {
        dispatch({type:'details', data:{...details, [e.target.id]:e.target.value}})
    }

    return (
        <form className='d-flex flex-column'>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="XYZ..." value={details.name} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="XYZ@email.com" value={details.email} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="text" className="form-control" id="phone" placeholder="+91-9857329233" value={details.phone} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea className="form-control" id="address" rows="3" value={details.address} onChange={(e)=>handleChange(e)}/>
            </div>
        </form>
    )
}

export default DetailsForm