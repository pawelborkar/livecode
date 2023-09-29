import { Card, Image, Input } from '@nextui-org/react';
import { useAtom } from 'jotai';
import { Check, File, FilePlus } from 'lucide-react';
import { filesAtom } from '../../../globalStates';
import { useState } from 'react';
const AddFile = () => {
  const [newFileName, setNewFileName] = useState('');
  const [files, setFiles] = useAtom(filesAtom);
  const [isCreatingFile, setIsCreatingFile] = useState<boolean>(false);

  const handleAddNewFile = () => {
    setIsCreatingFile(true);

    if (newFileName !== '') {
      const createNewFile = {
        id: `${files.length + 1}`,
        title: newFileName,
      };
      setFiles((files) => [...files, createNewFile]);
      setNewFileName('');
      setIsCreatingFile(false);
    }
  };

  return (
    <>
      <div className="flex  mt-10 flex-col items-center">
        <Image width={50} alt="Logo" src="src/assets/logo.png" />
        <h2 className="p-4 text-xl font-bold">LiveCode</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Card className="flex justify-center items-end text-slate-300 cursor-pointer bg-slate-800 p-2 mr-2 ml-2">
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
    </>
  );
};

export default AddFile;
