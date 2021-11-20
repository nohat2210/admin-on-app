import { useEffect, useState } from 'react';
import { getProject } from 'api/project';

const useGetProject = id => {
  const [project, setProject] = useState();
  useEffect(() => {
    (async () => {
      const res = await getProject({ id });
      setProject(res.data);
    })();
  }, []);
  return project;
};
export default useGetProject;
