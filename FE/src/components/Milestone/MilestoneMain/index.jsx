import React from 'react';
import PropTypes from 'prop-types';

import MilestoneMainHeader from './MilestoneMainHeader';
import MilestoneListItem from './MilestoneListItem';
import { $MilestoneMain } from './style';

const MilestoneMain = ({ milestoneData }) => {
  return (
    <$MilestoneMain>
      <MilestoneMainHeader />
      {milestoneData.map((milestone) => (
        <MilestoneListItem />
      ))}
    </$MilestoneMain>
  );
};

MilestoneMain.propTypes = {
  milestoneData: PropTypes.array.isRequired,
};

export default MilestoneMain;
