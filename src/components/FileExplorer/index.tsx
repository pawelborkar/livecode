import { Image } from '@nextui-org/react';
const FileExplorer = () => {
  return (
    <div className="flex flex-col  items-center w-100 h-full text-white bg-[#140f36]">
      <div className="flex  mt-10 flex-col items-center">
        <Image width={50} alt="Logo" src="src/assets/logo.png" />
        <h2 className="p-4 text-xl font-bold">LiveCode</h2>
      </div>
    </div>
  );
};

export default FileExplorer;
