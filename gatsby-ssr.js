import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({ props, element }) => {
  if (!props.path.includes('/__generated')) {
    return <Layout {...props}>{element}</Layout>;
  }
}