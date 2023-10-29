import { useAtom } from 'jotai';
import AddFile from './AddFile/AddFile';
import { filesAtom } from '../../globalStates';
import { Button, Image, Listbox, ListboxItem } from '@nextui-org/react';
import ListboxWrapper from './ListboxWrapper/ListboxWrapper';
import logo from '../../assets/logo.png';
// import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';

const FileExplorer = () => {
  const [files] = useAtom(filesAtom);
  return (
    <div className="flex flex-col items-center w-100 h-full text-white bg-[#140f36]">
      <div className="flex  mt-10 flex-col items-center">
        <Image width={50} alt="Logo" src={logo} />
        <h2 className="p-4 text-xl font-bold">LiveCode</h2>
      </div>
      <div className="w-[66%] max-w-[300px] flex justify-around items-center">
        {/* <ThemeDropdown /> */}
        <AddFile />
      </div>
      <div className="h-full overflow-hidden w-full flex flex-col justify-between items-center">
        <ListboxWrapper className="border-2">
          {files.map((file) => (
            <Listbox key={file.id} aria-label={file.name}>
              <ListboxItem key={file.id}>{file.name}</ListboxItem>
            </Listbox>
          ))}
        </ListboxWrapper>
        <div className="flex flex-col justify-between h-24 mb-8">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg"
          >
            Copy room ID
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-red-500 text-white shadow-lg"
          >
            Leave Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
