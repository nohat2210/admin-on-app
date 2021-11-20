import { useEffect, useState } from 'react';
import { getUserId } from 'api/user';
import { showError, showSuccess } from 'core/tools';
import * as cms from 'api/user';

const useGetUser = id => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getUserId({ id });
        setUser(response.data);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const toggleActiveUser = async isEnable => {
    try {
      const response = await cms.toggleActiveUser({ id, isEnable });
      setUser(response.data);
      showSuccess('Changed successfully');
    } catch (error) {
      showError(error);
    }
  };
  return { user, toggleActiveUser, isLoading };
};
export default useGetUser;
