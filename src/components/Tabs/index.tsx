import { useAtom } from 'jotai';
import { Tabs as Tabslist, Tab } from '@nextui-org/react';
import { tabsAtom } from '../../globalStates';
import { ITab } from '../../interfaces';
import { Editor } from '..';

const Tabs = () => {
  const [openedTabs] = useAtom(tabsAtom);

  return (
    <div className="flex flex-col items-start h-full w-4/6 text-lg ">
      <Tabslist color="primary" variant="solid" fullWidth aria-label="Options">
        {openedTabs.map((tab: ITab) => {
          return (
            <Tab key={tab.id} title={tab.title}>
              <Editor language={tab.language} />
            </Tab>
          );
        })}
      </Tabslist>
    </div>
  );
};

export default Tabs;
