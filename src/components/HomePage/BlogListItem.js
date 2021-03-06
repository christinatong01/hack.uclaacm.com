import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LinkNoStyle from '../LinkNoStyle/LinkNoStyle';

import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

const styles = theme => ({
	card: {
		height: '100%'
	},
	link: {
		height: 'inherit'
	},
	cardActionArea: {
		height: 'inherit'
	},
	title: {
		color: '#000000',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 1.3,
		lineHeight: 1.2,
		fontWeight: 600
	},
	subtitle: {
		color: '#000000',
		fontFamily: ['Poppins', 'sans-serif'],
		fontSize: theme.typography.fontSize * 0.9,
		lineHeight: 1.3
	},
	excerpt: {
		fontSize: theme.typography.fontSize * 0.9,
		color: '#0000008A'
	},
	info: {
		fontSize: theme.typography.fontSize * 0.9,
		color: '#0000008A',
		padding: theme.spacing(1, 0, 0)
	}
});

function BlogListItem({ post, classes }) {
	const { frontmatter, fields } = post;
	return (
		/*
			TODO:
				- Remove shadow over button
		*/
		<Card className={classes.card}>
			<LinkNoStyle to={fields.slug} className={classes.link}>
				<CardActionArea className={classes.cardActionArea}>
					<CardContent>
						<Typography className={classes.title}>{frontmatter.title}</Typography>
						<Typography className={classes.subtitle}>{frontmatter.subtitle}</Typography>
						<Typography className={classes.excerpt}>{post.excerpt}</Typography>
						<Typography className={classes.info}>
							{frontmatter.date} | {post.timeToRead} min read
						</Typography>
					</CardContent>
				</CardActionArea>
			</LinkNoStyle>
		</Card>
	);
}

BlogListItem.propTypes = {
	post: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlogListItem);


