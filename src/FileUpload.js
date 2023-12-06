import React, { useState } from 'react';
import axios from 'axios';
import './DimensionUpload.css';
import { CircularProgress } from '@mui/material';
import {Link} from 'react-router-dom';




function FileUpload({uploadPath}) {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState('');

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setUploadStatus('');
        setUploadProgress(0);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post(`http://localhost:4000/api/upload/${uploadPath}`, formData, {
            onUploadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percentCompleted);
                console.log(percentCompleted)
            }
        })
        .then(response => {
            setUploadStatus('Completed');
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            setUploadStatus('Failed');
        });
    };

    return (
        <div>
        <div className="file-upload-container">
            <h3>{uploadPath}</h3>
            <p>Upload {uploadPath} data files (optional) </p>
            {/* <p>Required columns : {uploadPath}_id, {uploadPath}_name </p>*/}
            { uploadProgress>0 && uploadStatus=='' && (
                    <CircularProgress />
                
            )}
            {uploadStatus && <p>{uploadStatus}</p>}

                <div className='button-div'> 
                <label className="custom-file-upload">
                    <input type="file" onChange={onFileChange} />
                    Choose File
                </label>
                <button className='upload-button' onClick={onFileUpload} style={{fontFamily:'Courier New'}}>Upload</button>
            <button className='metric-button' onClick={onFileUpload}><Link to={uploadPath} style={{ textDecoration: 'none', color: 'inherit', fontFamily:'Courier New' }}>Get Metric Dashboard</Link></button>
            </div>
            
          
          </div>
        </div>

    );
}

export default FileUpload;
