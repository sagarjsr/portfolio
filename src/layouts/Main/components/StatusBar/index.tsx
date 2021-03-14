/**
 * StatusBar component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles';


const useStyles = createUseStyles(styles);

const StatusBar: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <a rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon
          className={classes.icon}
          icon="code-branch"
          size="xs"
          inverse
        />
        <span className={classes.text}>master</span>
      </a>

      <span>
        <FontAwesomeIcon
          className={classes.icon}
          icon="smile"
          size="sm"
          inverse
        />
      </span>
    </footer>
  );
};

export default StatusBar;
