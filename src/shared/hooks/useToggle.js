import { useCallback, useState } from 'react';

const useToggle = setSelectedItem => {
  const [isVisible, setIsVisible] = useState(false);
  const onOpen = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setIsVisible(false);
    setSelectedItem(null);
  }, []);

  const onToggle = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return { isVisible, onOpen, onClose, onToggle };
};

export default useToggle;
