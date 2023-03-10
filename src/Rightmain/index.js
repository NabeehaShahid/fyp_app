import React from 'react';
import CardAnalytics from '../CardAnalytics';
import CardConverter from '../CardConverter';
import CardSentiment from '../CardSentiment';

const Rightmain = () => {
  return (
    <div>
        <CardConverter/>
        <CardSentiment/>
      <CardAnalytics />
    </div>
  );
}

export default Rightmain;
