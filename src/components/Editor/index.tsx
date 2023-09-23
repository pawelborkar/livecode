import MonacoEditor from '@monaco-editor/react';
import { IEditor } from '../../interfaces';
const Editor = ({ language }: IEditor) => {
  return (
    <MonacoEditor
      options={{ fontSize: 20, smoothScrolling: true }}
      theme="vs-dark"
      height={'94vh'}
      width={'62vw'}
      language={language}
    />
  );
};

export default Editor;
