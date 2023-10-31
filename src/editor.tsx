import ReactCodeMirror from '@uiw/react-codemirror';
import { IEditor } from '../../interfaces';
import { langs } from '@uiw/codemirror-extensions-langs';
import 'codemirror/keymap/sublime';
import { useEffect, useRef, useState } from 'react';

const EditorComponent = ({ language, socketRef }: IEditor) => {
  const editorRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [lang, setLang] = useState<any>();

  useEffect(() => {
    // Dynamically set the editor's language based on the file extension

    switch (language) {
      case 'js':
        setLang(langs.javascript());
        break;
      case 'html':
        setLang(langs.html());
        break;
      case 'css':
        setLang(langs.css());
        break;
      case 'xml':
        setLang(langs.xml());
        break;
      case 'json':
        setLang(langs.json());
        break;
      case 'sql':
        setLang(langs.sql());
        break;
      case 'py':
        setLang(langs.python());
        break;
      case 'rb':
        setLang(langs.ruby());
        break;
      case 'php':
        setLang(langs.php());
        break;
      case 'java':
        setLang(langs.java());
        break;
      case 'cpp':
        setLang(langs.cpp());
        break;
      case 'csharp':
        setLang(langs.csharp());
        break;
      case 'ts':
        setLang(langs.typescript());
        break;
      case 'md':
        setLang(langs.markdown());
        break;
      case 'go':
        setLang(langs.go());
        break;
      case 'swift':
        setLang(langs.swift());
        break;
      case 'rust':
        setLang(langs.rust());
        break;
      case 'rs':
        setLang(langs.rust());
        break;
      case 'lua':
        setLang(langs.lua());
        break;
      case 'perl':
        setLang(langs.perl());
        break;
      case 'scala':
        setLang(langs.scala());
        break;
      case 'dart':
        setLang(langs.dart());
        break;
      case 'r':
        setLang(langs.r());
        break;
      case 'kotlin':
        setLang(langs.kotlin());
        break;
      case 'haskell':
        setLang(langs.haskell());
        break;
      case 'groovy':
        setLang(langs.groovy());
        break;
      case 'clojure':
        setLang(langs.clojure());
        break;
      case 'powershell':
        setLang(langs.powershell());
        break;
      case 'vhdl':
        setLang(langs.vhdl());
        break;
      case 'coffeescript':
        setLang(langs.coffeescript());
        break;
      case 'erlang':
        setLang(langs.erlang());
        break;
      case 'elm':
        setLang(langs.elm());
        break;
      case 'jinja':
        setLang(langs.jinja2());
        break;
      case 'stylus':
        setLang(langs.stylus());
        break;
      case 'less':
        setLang(langs.less());
        break;
      case 'vue':
        setLang(langs.vue());
        break;
      case 'crystal':
        setLang(langs.crystal());
        break;
      case 'nginx':
        setLang(langs.nginx());
        break;
      case 'dockerfile':
        setLang(langs.dockerfile());
        break;
      case 'jsx':
        setLang(langs.jsx());
        break;
      case 'tsx':
        setLang(langs.tsx());
        break;
      case 'scheme':
        setLang(langs.scheme());
        break;
      case 'forth':
        setLang(langs.forth());
        break;
      case 'julia':
        setLang(langs.julia());
        break;
      case 'shell':
        setLang(langs.shell());
        break;
      case 'svelte':
        setLang(langs.svelte());
        break;
      case 'toml':
        setLang(langs.toml());
        break;
      case 'yaml':
        setLang(langs.yaml());
        break;

      default:
        setLang(langs.python());
    }
  }, [language]);

  const handleCodeChange = (value: unknown) => {
    console.log('VALUE', value);
  };

  // useEffect(() => {
  //   editorRef?.current?.on('change', (instance, changes) => {
  //     console.log('EDITOR', instance, changes);
  //   });
  // }, [editorRef]);

  const code = ``;
  return (
    <ReactCodeMirror
      onUpdate={(value) => handleCodeChange(value)}
      height="100vh"
      width="100vw"
      value={code}
      theme="dark"
      extensions={lang}
    />
  );
};

export default EditorComponent;
