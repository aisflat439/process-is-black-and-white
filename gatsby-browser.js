import React from 'react';
import Layout from './src/components/layout';

export function wrapPageElement({ element, props }) {
  if (!props.path.includes('/__generated')) {
    return <Layout {...props}>{element}</Layout>;
  }
  
  return element;
}