const js = `console.log("Hello World");`;

const css = `.helloWorld {
  background-color: orange;
}`;

const html = `<p>Hello World</p>`;

const json = `{
  "key": "Hello World"
}
`;

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: js,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: css,
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: html,
  },
  json: {
    name: 'json',
    language: 'json',
    value: json,
  },
};

export default files;
