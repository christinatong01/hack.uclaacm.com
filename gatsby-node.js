/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// convert windows to linux path
const postDirectory = path.join(__dirname, 'posts').replace(/\\/g, '/');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	/**
	 *
	 * Inject all markdown pages. It looks up all the post with GraphQL.
	 * Then uses `createPage` to create individual pages.
	 *
	 */
	const postTemplate = path.resolve('src/components/post/postTemplate.js');
	/* eslint-disable max-len */
	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				filter: { fields: {slug: {regex: "/\\\\/posts\\\\/(?:fall|winter|spring)[0-9]{4}/"}}}
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	/* eslint-enable max-len */
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { fields: { slug } } = node;
		createPage({
			path: slug,
			component: postTemplate,
			context: {} // additional data can be passed via context
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const absPath = node.fileAbsolutePath;
		if (absPath.startsWith(postDirectory)) {
			const value = createFilePath({ node, getNode });
			createNodeField({
				name: 'slug',
				node,
				value: `/posts${value}`
			});
		}
	}
};
