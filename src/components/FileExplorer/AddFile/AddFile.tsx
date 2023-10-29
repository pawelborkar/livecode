import { useState } from 'react';
import { Card, Input } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { Check, File, FilePlus } from 'lucide-react';
import { filesAtom, tabsAtom } from '../../../globalStates';
const AddFile = () => {
  const [newFileName, setNewFileName] = useState('');
  const [files, setFiles] = useAtom(filesAtom);
  const [, setOpenedTabs] = useAtom(tabsAtom);
  const [isCreatingFile, setIsCreatingFile] = useState<boolean>(false);

  const handleAddNewFile = () => {
    setIsCreatingFile(true);

    if (newFileName !== '') {
      const createNewFile = {
        id: files.length + 1,
        name: newFileName,
      };
      const language = newFileName.split('.');

      const newTab = {
        id: files.length + 1,
        title: newFileName,
        language: language[1] === 'js' ? 'javascript' : language[1],
      };
      setFiles((files) => [...files, createNewFile]);
      setOpenedTabs((tabs) => [...tabs, newTab]);
      setNewFileName('');
      setIsCreatingFile(false);
    }
  };
  const handleInputEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleAddNewFile();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="flex justify-center items-end ml-4 text-slate-300 cursor-pointer bg-slate-800 ">
        <FilePlus
          onClick={handleAddNewFile}
          className="hover:text-green-400 active:scale-75 active:text-green-600"
        />
      </Card>
      <div className="flex flex-col justify-center items-center">
        {isCreatingFile && (
          <div className="flex mt-3 w-4/5">
            <Input
              type="text"
              variant="bordered"
              placeholder="Enter a file name"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value.trim())}
              startContent={
                <File className="hover:text-sky-400" cursor={'arrow'} />
              }
              onKeyUp={handleInputEnter}
              endContent={
                <Check
                  cursor="pointer"
                  className="hover:text-green-400 hover:scale-125  active:text-green-600"
                  onClick={handleAddNewFile}
                />
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFile;
