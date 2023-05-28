import React from 'react';
import PropTypes from 'prop-types';

import LabelListItem from './LabelListItem';
import { $LabelListMain, $LabelCount } from './style';

const LabelListMain = ({ labels }) => {
  const LabelItems = labels.map(({ labelId, labelName, backgroundColor, textColor }) => (
    <LabelListItem key={labelId} name={labelName} backgroundColor={backgroundColor} textColor={textColor} />
  ));

  return (
    <$LabelListMain>
      <$LabelCount>{`${labels.length}개의 레이블`}</$LabelCount>
      {LabelItems}
    </$LabelListMain>
  );
};

LabelListMain.propTypes = {
  labels: PropTypes.array.isRequired,
};

export default LabelListMain;
