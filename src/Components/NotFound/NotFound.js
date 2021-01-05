import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "20vh 40px",
    padding: "40px",
    color: '#fff',
    background: 'linear-gradient(to right, #ff416c, #ff4b2b)'
  },
  body: {
    fontSize: 22,
    padding: '20px'
}
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
          <CardContent>
          <Typography gutterBottom>
              <div className="text-center mb-2">
				<Link to="/">
					<Button variant="outline-light"> Back</Button>
				</Link>
                </div>
			</Typography>
            <Typography component='h5' variant='h5' gutterBottom className={classes.body}>
               !!! 404 ERROR !!!
            </Typography>
            <Typography component='h6' variant='h6' gutterBottom className={classes.body}>
               Page Not Found
            </Typography>
          </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
