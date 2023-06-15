import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './Right.css';
import Viewer from '../../utility/Viewer/Viewer';
const Right = () => {
  return (
    <div className='Right'>
      <PDFViewer style={{width:'100%', height:'100%'}}>
        <Viewer/>
      </PDFViewer>
    </div>
  )
}

export default Right