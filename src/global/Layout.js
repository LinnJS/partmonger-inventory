import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import tw, { GlobalStyles as GlobalTailwindStyles } from 'twin.macro';

import theme from 'global/theme';
import GlobalStyle from './GlobalStyle';

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      icon: file(name: { eq: "icon" }) {
        childrenImageSharp {
          gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>

      <ThemeProvider theme={theme.light}>
        <GlobalTailwindStyles />
        <GlobalStyle />
        <Header>
          <h1 className="text-2xl font-extrabold tracking-tight text-center text-gray-900">PartMonger Inventory</h1>
        </Header>

        <>{children}</>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Header = styled.header`
  ${tw`flex items-center justify-between h-20 px-3.5 py-8`};
  color: ${({ theme }) => theme.color};

  button {
    ${tw`px-2.5 py-3 rounded`};
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
  }

  .gatsby-image-wrapper {
    ${tw`w-28`};
  }
`;

export default Layout;
