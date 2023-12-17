import React from 'react';
import CustomButton from './CustomButton';

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Currently Unavailable. Soon you will be able to ask AI to generate images and textures for you.'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
    </div>
  )
}

export default AIPicker