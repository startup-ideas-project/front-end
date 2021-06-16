import React, {useState} from "react";
import {FILE_API} from "../../api";

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState("");
  const [uploadedStatus, setUploadedStatus] =useState(false);

  const handleUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  }

  const onClickHandler = () =>{
    const data = new FormData() 
    data.append('uploadedFile', uploadedFile)
    FILE_API.fileUpload(data).then(res => {
        if(res.status === 200){
            setUploadedStatus(true)
        }
    })
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {uploadedFile.name}</p>
      <button type="button" onClick={onClickHandler}>Upload</button> 
    </div>
  );
}

export default FileUpload;