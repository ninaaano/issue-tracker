import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';

import { LABELS, MILESTONES } from '../../constants/api';

import MilestoneHeader from '../../components/Milestone/MilestoneHeader';
import MilestoneMain from '../../components/Milestone/MilestoneMain';
import { $Milestone } from './style';

const Milestone = () => {
  // TODO: 데이터 Fetch해오는것이 아닌 Context로 관리해야할듯 - 아켄이랑 상의!!
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { fetchData: getMilestoneData, data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const [milestone, setMilestone] = useState([]);
  const allDataLoaded = labelData && milestoneData;

  useEffect(() => {
    if (allDataLoaded) setMilestone(milestoneData);
  }, [milestoneData, allDataLoaded]);

  const getNewMilestoneData = async () => {
    await getMilestoneData();
    setMilestone(milestoneData);
  };

  return (
    allDataLoaded && (
      <$Milestone>
        <MilestoneHeader
          labelCount={labelData.length}
          milestoneCount={milestoneData.length}
          getNewMilestoneData={getNewMilestoneData}
        />
        <MilestoneMain milestoneData={milestone} />
      </$Milestone>
    )
  );
};

export default Milestone;