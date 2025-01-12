/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { graphql } from 'gatsby';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Content from 'components/pages/blog-post/content';
import Hero from 'components/pages/blog-post/hero';
import SocialShare from 'components/pages/blog-post/social-share';
import CodeBlock from 'components/shared/code-block';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscribeMinimalistic from 'components/shared/subscribe-minimalistic';
import getReactContentWithLazyBlocks from 'utils/get-react-content-with-lazy-blocks';

const BlogPostTemplate = ({
  data: {
    wpPost: { content, title, pageBlogPost, date, readingTime },
  },
  pageContext: { pagePath },
}) => {
  const contentWithLazyBlocks = getReactContentWithLazyBlocks(
    content,
    {
      blogpostcode: CodeBlock,
    },
    true
  );
  const [socialShareRef, isSocialShareInView] = useInView({
    threshold: 0.5,
  });
  return (
    <Layout headerTheme="white" isHeaderSticky>
      <article className="mx-auto grid max-w-[1009px] grid-cols-10 gap-x-8 pt-20 xl:max-w-[936px] xl:pt-16 lg:max-w-none lg:px-6 lg:pt-12 md:gap-x-0 md:px-4 md:pt-6">
        <Hero
          className="col-start-2 col-end-10 md:col-span-full"
          title={title}
          {...pageBlogPost}
          date={date}
          readingTime={readingTime}
        />

        <SocialShare
          className={clsx(
            'col-span-1 col-start-1 mt-10 transition-opacity duration-150 md:hidden',
            isSocialShareInView ? 'invisible opacity-0' : 'visible opacity-100'
          )}
          slug={pagePath}
          title={title}
          isSticky
        />
        <Content
          className="col-start-2 col-end-10 mt-8 md:col-span-full"
          html={contentWithLazyBlocks}
        />

        <SocialShare
          className="col-start-2 col-end-10 mt-8 md:col-span-full"
          slug={pagePath}
          title={title}
          ref={socialShareRef}
          withTopBorder
        />
      </article>
      <SubscribeMinimalistic />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      slug
      title
      content
      readingTime
      date(formatString: "MMMM D, YYYY")
      pageBlogPost {
        description
        author {
          ... on WpPostAuthor {
            title
            postAuthor {
              role
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 40)
                  }
                }
              }
            }
          }
        }
      }
      ...wpPostSeo
    }
  }
`;

export default BlogPostTemplate;

export const Head = ({
  location: { pathname },
  data: {
    wpPost: { seo, pageBlogPost },
  },
}) => <SEO pathname={pathname} description={pageBlogPost.description} {...seo} />;
