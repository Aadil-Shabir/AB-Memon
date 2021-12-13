import React from 'react';
import {Typography, Chip} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';

import styles from '../styles/Skills.module.css';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    margin: '2rem',
  },
  chip: {
    backgroundColor: 'white',
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.2}}
    >
      <div className={classes.container}>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          Languages and Frameworks
        </Typography>
        <div className={styles.langLogos}>
          <img src="https://img.icons8.com/color/64/000000/javascript--v2.png" />
          <img src="https://img.icons8.com/color/64/000000/typescript.png" />
          <img src="https://img.icons8.com/nolan/64/html-5.png" />
          <img src="https://img.icons8.com/color/64/000000/css3.png" />
          <img src="https://img.icons8.com/fluency/64/000000/python.png" />
          <br />
          <img src="https://img.icons8.com/office/64/000000/react.png" />
          <img src="https://img.icons8.com/fluency/64/000000/node-js.png" />
        </div>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          Skills
        </Typography>
        <div className={styles.skillLogos}>
          <img src="https://img.icons8.com/color/64/000000/npm.png" />
          <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-database-data-science-kiranshastry-lineal-color-kiranshastry.png" />
          <img src="https://img.icons8.com/dusk/64/000000/server.png" />
          <img src="https://img.icons8.com/color/64/000000/git.png" />
          <img src="https://img.icons8.com/color/64/000000/apollo.png" />
        </div>
        <Typography
          variant="h4"
          color="tomato"
          style={{fontFamily: 'Readex Pro'}}
        >
          other
        </Typography>
        <div className={styles.otherTag}>
          <Chip label="Mongoose" color="primary" />
          <Chip label="GraphQL" color="primary" />
          <Chip label="REST API" color="primary" />
          <Chip label="Next.js" color="primary" />
          <Chip label="Redux" color="primary" />
          <Chip label="Bootstrap" color="primary" />
          <Chip label="Material UI" color="primary" />
          <br />
          <Chip label="Styled Component" color="primary" />
          <Chip label="Semantic UI" color="primary" />
          <Chip label="React Query" color="primary" />
          <Chip label="JQuery" color="primary" />
          <Chip label="Express.js" color="primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
