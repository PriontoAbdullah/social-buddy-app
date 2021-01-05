import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import AllComments from '../Comments/AllComments';

const useStyles = makeStyles({
	root: {
		maxWidth: 900,
		margin: '20px auto',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		border: 'none',
		color: '#fff',
		background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'
	},
	title: {
		fontSize: 30,
		textAlign: 'center'
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		color: 'white',
		fontWeight: 500,
		borderBottom: '3px solid #3f2b96',
		width: '250px',
		margin: '10px auto'
	},
	body: {
		textAlign: 'center'
	}
});
const SinglePost = () => {
	const { postId } = useParams();
	const [ SinglePost, SetSinglePost ] = useState([]);

	const classes = useStyles();
	useEffect(
		() => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
				.then((res) => res.json())
				.then((post) => SetSinglePost(post));
		},
		[ postId ]
	);

	return (
		<div>
			<Typography className={classes.heading} gutterBottom>
				Single Post
				<Link to="/">
					<Button variant="outline-light" className="ml-3 py-1"> Back</Button>
				</Link>
			</Typography>

			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="300"
						width="300"
						image={`https://picsum.photos/id/1${SinglePost.id}/200/300`}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography className={classes.id} gutterBottom>
							{SinglePost.id}
						</Typography>
						<Typography className={classes.title} gutterBottom>
							{SinglePost.title}
						</Typography>
						<Typography className={classes.body} variant="body2" component="p">
							{SinglePost.body}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Typography className={classes.heading} gutterBottom>
				Comments
			</Typography>
			<AllComments postId={postId} />
		</div>
	);
};
export default SinglePost;
