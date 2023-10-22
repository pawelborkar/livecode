import { useAtom } from 'jotai';
import AddFile from './AddFile/AddFile';
import { filesAtom } from '../../globalStates';
import { Listbox, ListboxItem } from '@nextui-org/react';
import ListboxWrapper from './ListboxWrapper/ListboxWrapper';

const FileExplorer = () => {
  const [files] = useAtom(filesAtom);
  return (
    <div className="flex flex-col items-center w-100 h-full text-white bg-[#140f36]">
      <AddFile />

      <ListboxWrapper className="border-2">
        {files.map((file) => (
          <Listbox aria-label={file.name}>
            <ListboxItem key={file.id}>{file.name}</ListboxItem>
          </Listbox>
        ))}
      </ListboxWrapper>
    </div>
  );
};

export default FileExplorer;
