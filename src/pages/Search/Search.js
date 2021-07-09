import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MediaCard from '../../components/Card'
import Form from '../../components/Form'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AutoGrid = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Form 
              search={props.search}
              handleInputChange={props.handleInputChange}
              handleSearchChar={props.handleSearchChar}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper>
            {
              props.char.hasOwnProperty('name')
                ? <MediaCard 
                    char={props.char}
                    handleSaveChar={props.handleSaveChar}
                  />
                : null
            }
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AutoGrid