import * as React from 'react';
import './Page.css'
import Header from './Header';

export interface PageProps {
  title: string,
  children: JSX.Element[] | JSX.Element
}

export default (props: PageProps) => {
  return (
    <div>
      <Header title={props.title} />
      {props.children}
    </div>
  );
}