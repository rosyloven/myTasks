import React from 'react';
import classes from "../MusicTabBar.module.css";

const TabBarItem = (props) => {

  return (
      <a href='#' onClick={() => {props.setContent(props.content)}}>
        <div className={classes.item}>{props.name}</div>
      </a>
  );
};

export default TabBarItem;