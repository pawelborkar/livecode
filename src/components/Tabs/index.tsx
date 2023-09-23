import { useAtom } from 'jotai';
import { Tabs as Tabslist, Tab, Card } from '@nextui-org/react';
import { tabsAtom } from '../../globalStates';
import MonacoEditor from '@monaco-editor/react';
import { ITab } from '../../interfaces';
import { FileExplorer } from '..';

const Tabs = () => {
  const [openedTabs] = useAtom(tabsAtom);

  return (
    <div className="flex items-end h-full w-full text-lg ">
      <div className="flex w-80 h-full bg-violet-950">
        <FileExplorer />
      </div>
      <div className="flex flex-col">
        <Tabslist color="primary" aria-label="Options">
          {openedTabs.map((tab: ITab) => {
            return (
              <Tab key={tab.id} title={tab.title}>
                <MonacoEditor
                  className="text-xl"
                  options={{ fontSize: 20 }}
                  theme="vs-dark"
                  height={'94vh'}
                  width={'45vw'}
                  language={tab.language}
                />
              </Tab>
            );
          })}
        </Tabslist>
      </div>
      <div className="flex justify-center items-center ">
        <div>Preview</div>
      </div>
    </div>
  );
};

export default Tabs;
