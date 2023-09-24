import { Panel, PanelGroup } from 'react-resizable-panels';
import { FileExplorer, Tabs, Result, ResizeHandle } from '..';
// import styles from './ResizeHandle/styles.module.css';
const Playground = () => {
  return (
    <div>
      <PanelGroup autoSaveId="example" direction="horizontal">
        <Panel
          className="flex flex-col"
          collapsible={true}
          defaultSize={20}
          order={1}
        >
          <FileExplorer />
        </Panel>
        <ResizeHandle />

        <Panel className="flex flex-col" collapsible={true} order={2}>
          <Tabs />
        </Panel>
        <ResizeHandle />
        <Panel
          className="flex flex-col"
          collapsible={true}
          defaultSize={20}
          order={3}
        >
          <Result />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Playground;
