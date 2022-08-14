import React, {useState} from 'react';
import classes from "./MusicTabBar.module.css";
import TabBarItem from "./TabBarItem/TabBarItem";

const MusicTabBar = (props) => {
  let [content, setContent] = useState('');
  const content1 = <div>Content1</div>
  const content2 = <div>Content2</div>
  const content3 = <div>Content3</div>

  return (
    <div className={classes.tabsContainer} >
      <div className={classes.tabItems}>
        <TabBarItem name='ItemOne' setContent={setContent} content={content1} />
        <TabBarItem name='ItemTwo' setContent={setContent} content={content2} />
        <TabBarItem name='ItemThree' setContent={setContent} content={content3} />
      </div>
      <div className={classes.tabContent}>
        {content}
      </div>
    </div>
  );
};

export default MusicTabBar;