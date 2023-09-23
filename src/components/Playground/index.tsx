import { FileExplorer, Tabs, Result } from '..';

const Playground = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <FileExplorer />
      <Tabs />
      <Result />
    </div>
  );
};

export default Playground;
