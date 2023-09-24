import { PanelResizeHandle } from 'react-resizable-panels';

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
    />
  );
};

export default ResizeHandle;
