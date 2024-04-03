import { useEffect, useState } from 'react';

function useWindowExistence() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return hasWindow;
}

export default useWindowExistence;
