import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const BasicTextFields = props => {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      value={props.search}
      onChange={props.handleInputChange}
      handleSearchChar={props.handleSearchChar}
    >
      <TextField id="outlined-basic" label="Search A Character" variant="outlined" />

      <Button
        variant="contained"
        color="primary"
        onClick={props.handleSearchChar}
      >
        Search
      </Button>
    </form>
  );
}

export default BasicTextFields