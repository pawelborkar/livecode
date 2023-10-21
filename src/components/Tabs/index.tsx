import { useAtom } from 'jotai';
import { Tabs as Tablist, Tab } from '@nextui-org/react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Editor as NotesEditor } from 'novel';
import { tabsAtom } from '../../globalStates';
import { ITab } from '../../interfaces';
import { Editor } from '..';

const Tabs = () => {
  const [openedTabs] = useAtom(tabsAtom);

  return (
    <div className="flex flex-col resize-y justify-center items-start h-full text-lg ">
      <Tablist color="primary" variant="solid" fullWidth aria-label="Options">
        {openedTabs.map((tab: ITab) => {
          console.log('tab', tab.language);
          return (
            <Tab key={tab.id} title={tab.title}>
              <Editor language={tab.language} />
            </Tab>
          );
        })}
        <Tab
          className="flex w-full h-full justify-center items-center "
          key={openedTabs.length + 1}
          title="whiteboard"
        >
          <Excalidraw UIOptions={{ dockedSidebarBreakpoint: 200 }} />
        </Tab>
        <Tab className="w-full" key={openedTabs.length + 2} title="Notes">
          <div className="w-full h-screen overflow-hidden">
            <NotesEditor className="w-full h-full overflow-auto" />
          </div>
        </Tab>
      </Tablist>
    </div>
  );
};

export default Tabs;
