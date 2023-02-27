import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const Monaco = () => {
  const [code, setCode] = useState('// Start typing your code here...');

  function handleEditorChange(value, event) {
    setCode(value);
  }

  return (
    <MonacoEditor
      width="100%"
      height="100vh"
      language="javascript"
      value={code}
      theme="vs-dark"
      onChange={handleEditorChange}
    />
  );
};

export default Monaco;
