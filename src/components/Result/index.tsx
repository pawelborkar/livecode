import { Panel, PanelGroup } from 'react-resizable-panels';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

const Result = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <PanelGroup autoSaveId="example" direction="vertical">
        {/* <Panel collapsible={true} order={1}>
          <Card className="py-4 h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Result</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-1"></CardBody>
          </Card>
        </Panel>
        <ResizeHandle /> */}
        <Panel collapsible={true} order={2}>
          <Card className="py-4 bottom-0 h-screen text-white bg-[#150a2a]">
            <CardHeader className="pb-0  pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Terminal</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-1"></CardBody>
          </Card>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Result;
