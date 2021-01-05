import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		maxWidth: 800,
		margin: '20px auto',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		border: 'none',
		color: '#fff',
		background: 'linear-gradient(to right, #141e30, #243b55)'
	},
	id: {
		fontSize: 20,
		textAlign: 'left'
	},
	title: {
		fontSize: 30,
		textAlign: 'center'
	},
	body: {
		fontSize: 18
	}
});

const Post = (props) => {
	const { title, body, id } = props.post;
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="300"
						width="300"
						image={`https://picsum.photos/id/1${id}/200/300`}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography className={classes.id} gutterBottom>
							{id}
						</Typography>
						<Typography className={classes.title} gutterBottom>
							{title}
						</Typography>
						<Typography className={classes.body} variant="body2" component="p">
							{body}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to={`/single_post/${id}`}>
						<Button variant="outline-light">See More...</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default Post;
