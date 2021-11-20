import React, { useEffect, useState } from 'react';
import Statistics from 'shared/components/Statistics';
import userIcon from 'assets/images/user.png';
import project from 'assets/images/project.png';
import { getSummary } from 'api/summary';
import { showError } from 'core/tools';

const Summary = () => {
  const [summary, setSummary] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await getSummary();
        setSummary(response.data);
      } catch (error) {
        showError(error);
      }
    })();
  }, []);
  return (
    <div className="flex">
      <Statistics
        title="Total Users"
        total={summary?.totalUsers || 0}
        icon={userIcon}
        size={48}
      />
      <Statistics
        title="Total Projects"
        total={summary?.totalProjects || 0}
        icon={project}
        size={48}
      />
    </div>
  );
};
export default Summary;
