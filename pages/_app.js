import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
      </ThemeProvider>
    </>
  )
}
