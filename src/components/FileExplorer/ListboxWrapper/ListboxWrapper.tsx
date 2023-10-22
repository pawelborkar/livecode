// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListboxWrapper = ({ children }: any) => (
  <div className="w-2/3 mt-4 max-w-[300px] border-small px-1 py-2 rounded-small border-slate-600 dark:border-default-100">
    {children}
  </div>
);

export default ListboxWrapper;
