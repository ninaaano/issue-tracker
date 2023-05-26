import React from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';

import { LABELS, MILESTONES } from '../../constants/api';

import MilestoneHeader from '../../components/Milestone/MilestoneHeader';
import MilestoneMain from '../../components/Milestone/MilestoneMain';
import { $Milestone } from './style';

const Milestone = () => {
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = labelData && milestoneData;

  return (
    allDataLoaded && (
      <$Milestone>
        <MilestoneHeader />
        <MilestoneMain />
      </$Milestone>
    )
  );
};

export default Milestone;
