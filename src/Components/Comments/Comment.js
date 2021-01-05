import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "20px 40px",
    padding: "40px",
    maxWidth: 900,
    justifyContent: "between",
    color: '#fff',
		background: 'linear-gradient(to right, #536976, #292e49)'
  },
  details: {
    display: "flex",
    flex: 1,
  },
  body: {
    color: '#fff',
	},
  cover: {
    width: "150px",
    height: "150px",
    border: "3px solid #3f2b96",
    borderRadius: "50%",
    marginTop: '30px'
  },
}));
const Comment = props => {
  const classes = useStyles();
  const { name, email, body, postId } = props.comment;

  const [RandomUser, SetRandomUser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => SetRandomUser(data.results[0].picture.large));
  }, []);

  return (
    <div>
      <Card className={classes.root}>

      <CardMedia
          className={classes.cover}
          image={RandomUser}
          title='User'
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant='subtitle1' className={classes.body}>
              Post ID: {postId}
            </Typography>
            <Typography component='h5' variant='h5' gutterBottom>
             {name}
            </Typography>
            <Typography component='h6' variant='h6' gutterBottom>
              {email}
            </Typography>
            <Typography variant='subtitle1' className={classes.body}>
              Comments : {body}
            </Typography>
          </CardContent>
        </div>
        
      </Card>
    </div>
  );
};

export default Comment;
