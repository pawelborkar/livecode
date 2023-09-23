import MonacoEditor from '@monaco-editor/react';
const Editor = () => {
  return (
    <MonacoEditor
      height="70vh"
      width="80vw"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue="console.log('Pawel')"
    />
  );
};

export default Editor;
