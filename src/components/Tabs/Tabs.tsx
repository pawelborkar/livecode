import { useAtom } from 'jotai';
import { Tabs as Tablist, Tab } from '@nextui-org/react';
import { Excalidraw } from '@excalidraw/excalidraw';
import { Editor as NotesEditor } from 'novel';
import { activeTabAtom, tabsAtom } from '../../globalStates';
import { ITab } from '../../interfaces';
import { Editor } from '../../components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tabs = ({ socketRef }: any) => {
  const [openedTabs] = useAtom(tabsAtom);
  const [, setActiveTab] = useAtom(activeTabAtom);
  return (
    <div className="flex flex-col resize-y justify-center items-start  max-h-fit text-lg ">
      <Tablist
        color="primary"
        variant="solid"
        fullWidth
        aria-label="Opened Tabs"
        defaultSelectedKey={openedTabs.length}
        onSelectionChange={(k) => setActiveTab(k.toString())}
      >
        {openedTabs.map((tab: ITab) => {
          return (
            <Tab key={tab.id} title={tab.title}>
              <Editor socketRef={socketRef} language={tab.language} />
            </Tab>
          );
        })}
        <Tab
          className="flex w-full h-full justify-center items-center "
          key={openedTabs.length + 1}
          title="whiteboard"
        >
          <div className="w-full h-[92vh]">
            <Excalidraw UIOptions={{ dockedSidebarBreakpoint: 200 }} />
          </div>
        </Tab>
        <Tab className="w-full" key={openedTabs.length + 2} title="Notes">
          <div className="w-full h-[92vh] overflow-hidden">
            <NotesEditor className="w-full h-full overflow-auto" />
          </div>
        </Tab>
      </Tablist>
    </div>
  );
};

export default Tabs;
