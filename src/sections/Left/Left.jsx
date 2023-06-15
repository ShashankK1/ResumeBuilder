import React from 'react';
import Category from '../../components/Category/Category';
import DetailsForm from '../../components/DetailsForm/DetailsForm';
import Education from '../../components/Education/Education';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import './Left.css';
const Left = (props) => {

  return (
    <div className='Left'>
      <div className='d-flex justify-content-between'>
        <strong className='left-text'>Create resume</strong>
      </div>
      <hr />
      <div className='edit d-flex flex-column'>
        <Category title="Personal Details" content={<DetailsForm />} />
        <Category title="Experience" content={<Experience />} />
        <Category title="Education/Qualifications" content={<Education/>}/>
        <Category title="Skills" content={<Skills/>}/>
      </div>
    </div>
  )
}

export default Left