import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import languages from './languages';

const Monaco = () => {
  const editorRef = useRef(null);
  const [languageName, setLanguageName] = useState('script.js');

  const language = languages[languageName];

  useEffect(() => {
    editorRef.current?.focus();
  }, [language.name]);

  const handleLanguageChange = (event) => {
    setLanguageName(event.target.value);
  };

  return (
    <div className="container">
      <div className="moaco-container">
        <MonacoEditor
          width="100%"
          height="100%"
          path={language.name}
          defaultLanguage={language.language}
          defaultValue={language.value}
          theme="vs-dark"
          onMount={(editor) => (editorRef.current = editor)}
        />
      </div>
      <div className="language-container">
        <select
          value={languageName}
          onChange={handleLanguageChange}
          className="language-selector"
        >
          <option value="script.js">JavaScript</option>
          <option value="style.css">CSS</option>
          <option value="index.html">HTML</option>
          <option value="json">JSON</option>
        </select>
      </div>
    </div>
  );
};

export default Monaco;
