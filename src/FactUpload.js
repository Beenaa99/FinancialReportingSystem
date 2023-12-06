import React, { useState } from 'react';
import axios from 'axios';
import './FactUpload.css';
import CircularProgress from '@mui/material/CircularProgress';


function FactUpload() {

    const handleClickScroll = () => {
        window.scrollBy({
            top: 950,
            behavior: 'smooth',
          });
      };

    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');

     const onFileChange = (e) => {
         setFile(e.target.files[0]);
         setUploadStatus('');
    //     setUploadProgress(0);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post(`http://localhost:4000/api/upload/Transaction`, formData, {
            onUploadProgress: progressEvent => {
                const percentCompleted = 'started';
                setUploadProgress(percentCompleted);

            }
        })
        .then(response => {
            setUploadStatus('Completed');
            setUploadProgress('');
            console.log(response);
        })
        .catch(error => {
            console.error(error);
            setUploadStatus('Failed');
        });
    };
    return (
            <div className='fact-container'>
           
                
            <div className="upload-container">
            <div>
            <h3>Transactional Data</h3>
            <p>Let's start with transactional data. Please upload the dataset in CSV format</p>
            </div>
            { uploadProgress && (
                    <CircularProgress />
                
            )}
            {uploadStatus && <p>{uploadStatus}</p>}

            {uploadStatus=='Completed' ? (
                <div> 
                    <p>Great! You can optionally provide Dimensional data as well </p>
                    <button className='upload-button' onClick={handleClickScroll}>Proceed</button>
                </div> 
                ) : (
                <div className='button-div'> 
                <label className="custom-file-upload">
                    <input type="file" onChange={onFileChange} />
                    Choose File
                </label>
                <button className='upload-button' onClick={onFileUpload}>Upload</button>
                </div>
            ) }
            
            
            </div>
       
            </div>
    );
}

export default FactUpload;
