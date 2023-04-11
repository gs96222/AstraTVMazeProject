import React from 'react';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import {rootStyle} from './styles';

type ShowSummaryProps = {
  summary?: string;
};

const ShowSummary: React.FC<ShowSummaryProps> = ({summary}) => {
  const {width} = useWindowDimensions();

  const htmlContent = `<div style="${rootStyle}">${summary}</div>`;

  return <RenderHtml contentWidth={width} source={{html: htmlContent}} />;
};

export default ShowSummary;
