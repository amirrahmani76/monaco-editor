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

  return (
    <>
      <button
        disabled={languageName === 'script.js'}
        onClick={() => setLanguageName('script.js')}
      >
        javaScript
      </button>
      <button
        disabled={languageName === 'style.css'}
        onClick={() => setLanguageName('style.css')}
      >
        css
      </button>
      <button
        disabled={languageName === 'index.html'}
        onClick={() => setLanguageName('index.html')}
      >
        html
      </button>
      <button
        disabled={languageName === 'json'}
        onClick={() => setLanguageName('json')}
      >
        json
      </button>
      <MonacoEditor
        width="100%"
        height="100vh"
        path={language.name}
        defaultLanguage={language.language}
        defaultValue={language.value}
        theme="vs-dark"
        onMount={(editor) => (editorRef.current = editor)}
      />
    </>
  );
};

export default Monaco;
