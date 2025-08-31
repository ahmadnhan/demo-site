import React from 'react';
import { createRoot } from 'react-dom/client';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App(){
  return (
    <div style={{maxWidth:420,margin:'40px auto',fontFamily:'system-ui, Arial'}}>
      <h2 style={{textAlign:'center'}}>Uploadcare React Uploader</h2>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        classNameUploader="uc-light"
        pubkey="e54eeabbf32d6824809b"
        multiple
        onFileUploadSuccess={file=>{
          console.log('Uploaded:', file.cdnUrl);
        }}
      />
      <p style={{marginTop:24,textAlign:'center'}}>
        <a href="/" style={{color:'#039be5'}}>عودة للرئيسية</a>
      </p>
    </div>
  );
}

const el = document.getElementById('root');
createRoot(el).render(<App />);
