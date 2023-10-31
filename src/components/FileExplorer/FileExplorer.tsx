import { useAtom } from 'jotai';
import { Button, Image, Listbox, ListboxItem } from '@nextui-org/react';
import AddFile from './AddFile/AddFile';
import ListboxWrapper from './ListboxWrapper/ListboxWrapper';
import Client from './Client/Client';
import {
  activeTabAtom,
  connectedUsersAtom,
  filesAtom,
} from '../../globalStates';
import logo from '../../assets/logo.png';
import { IClient } from '../../interfaces';

const FileExplorer = () => {
  const [files] = useAtom(filesAtom);
  const [activeTab] = useAtom(activeTabAtom);
  const [clients] = useAtom(connectedUsersAtom);
  return (
    <div className="flex flex-col items-center w-100 h-full max-h-screen text-white bg-[#140f36]">
      <div className="flex  mt-10 mb-8 items-center">
        <Image width={36} alt="Logo" src={logo} />
        <p className="p-4 text-xl font-bold">LiveCode</p>
      </div>
      <div className="w-[66%] max-w-[300px] flex justify-around items-center">
        <AddFile />
      </div>
      <div className="h-full overflow-hidden w-full flex flex-col justify-between items-center">
        <ListboxWrapper className="border-2">
          {files.map((file) => {
            const active =
              file.id === Number(activeTab)
                ? 'bg-gradient-to-tr from-pink-500 to-red-500 text-white shadow-lg'
                : 'bg-inherit';
            return (
              <Listbox key={file.id} aria-label={file.name}>
                <ListboxItem className={active} key={file.id}>
                  {file.name}
                </ListboxItem>
              </Listbox>
            );
          })}
        </ListboxWrapper>
        <div className="w-full flex flex-wrap justify-around p-4">
          {clients?.map((client: IClient) => {
            return <Client key={client.socketId} username={client.username} />;
          })}
        </div>
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
