import { PanelResizeHandle } from 'react-resizable-panels';
import { PiSplitHorizontalBold } from 'react-icons/pi';
import styles from './styles.module.css';

const ResizeHandle = ({
  className = '',
  id,
}: {
  className?: string;
  id?: string;
}) => {
  return (
    <PanelResizeHandle
      className={[styles.ResizeHandleOuter, className].join(' ')}
      id={id}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <PiSplitHorizontalBold />
      </div>
    </PanelResizeHandle>
  );
};

export default ResizeHandle;
