import { scan } from 'react-scan';

const IS_DEV_ENV = import.meta.env.DEV;
const IS_WINDOW_AVAILABLE = typeof window !== 'undefined';
const IS_REACT_SCAN_ENABLED = localStorage.getItem('REACT_SCAN_ENABLED') === 'true';

if (IS_DEV_ENV && IS_WINDOW_AVAILABLE && IS_REACT_SCAN_ENABLED) {
  scan({
    enabled: true,
  });
}
