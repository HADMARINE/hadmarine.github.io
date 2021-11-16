import { useEffect, useRef } from 'react';

// Special thanks to Scotty Waggoner

const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export default useIsMount;
