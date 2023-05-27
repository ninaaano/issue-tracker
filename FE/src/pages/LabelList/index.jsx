import React from 'react';
import PropTypes from 'prop-types';

import { LABELS, MILESTONES } from '../../constants/api';

import useFetch from '../../hooks/useFetch';

import LabelListHeader from '../../components/LabelList/LabelListHeader';
import { $LabelList } from './style';

const LabelList = (props) => {
  const { data: labelData } = useFetch(LABELS.GET_ALL_LABELS);
  const { data: milestoneData } = useFetch(MILESTONES.GET_ALL_MILESTONES);

  const allDataLoaded = labelData && milestoneData;

  return (
    allDataLoaded && (
      <$LabelList>
        <LabelListHeader labelCount={labelData.length} milestoneCount={milestoneData.length} />
      </$LabelList>
    )
  );
};

LabelList.propTypes = {};

export default LabelList;
