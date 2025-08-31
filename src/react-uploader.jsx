import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App(){
  const [files, setFiles] = useState([]);
  return (
    <div style={{maxWidth:720,margin:'40px auto',fontFamily:'system-ui, Arial',padding:'0 16px'}}>
      <h2 style={{textAlign:'center'}}>Uploadcare React Uploader</h2>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        classNameUploader="uc-light"
        pubkey="e54eeabbf32d6824809b"
        multiple
        onFileUploadSuccess={file=>{
          setFiles(prev=>{
            if(prev.find(p=>p.uuid===file.uuid)) return prev;
            return [...prev, file];
          });
        }}
      />
      <div style={{marginTop:30}}>
        {files.length===0 && <em style={{color:'#666',fontSize:14}}>لم يتم رفع ملفات بعد</em>}
        {files.length>0 && (
          <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))'}}>
            {files.map(f=>{
              const name = f.name || f.originalFilename || f.uuid;
              const sizeKB = f.size ? (f.size/1024).toFixed(1) : '';
              const lower = (name||'').toLowerCase();
              const isImg = f.isImage || /\.(png|jpe?g|gif|webp|bmp|svg|avif)$/i.test(lower);
              const isVideo = /\.(mp4|webm|ogg|mov|m4v)$/i.test(lower) || (f.mimeType && f.mimeType.startsWith('video/'));
              const baseUrl = f.cdnUrl || f.originalUrl || '';
              let thumb;
              if(isImg && baseUrl){
                const previewUrl = baseUrl + (baseUrl.includes('-/preview/')? '' : '-/preview/300x300/-/quality/smart/');
                thumb = <img src={previewUrl} alt={name} loading="lazy" style={{width:'100%',aspectRatio:'1/1',objectFit:'cover',borderRadius:6,background:'#e2e8f0'}}/>;
              } else if(isVideo && baseUrl){
                thumb = <video src={baseUrl} muted playsInline style={{width:'100%',aspectRatio:'1/1',objectFit:'cover',borderRadius:6,background:'#000'}}/>;
              } else {
                thumb = <div style={{width:'100%',aspectRatio:'1/1',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,background:'#e2e8f0',borderRadius:6}}>ملف</div>;
              }
              return (
                <a key={f.uuid} href={baseUrl} target="_blank" rel="noopener" style={{textDecoration:'none',color:'inherit',background:'#f8fafc',border:'1px solid #d9e2ec',borderRadius:10,padding:8,display:'flex',flexDirection:'column',gap:6,boxShadow:'0 1px 2px rgba(0,0,0,.08)'}}>
                  {thumb}
                  <div style={{fontSize:12,wordBreak:'break-all',lineHeight:1.2}}>{name}</div>
                  <div style={{fontSize:11,color:'#666'}}>{sizeKB} KB</div>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <p style={{marginTop:32,textAlign:'center'}}>
        <a href="/" style={{color:'#039be5'}}>عودة للرئيسية</a>
      </p>
    </div>
  );
}

const el = document.getElementById('root');
createRoot(el).render(<App />);
