import { getSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    return {
      props: {
        session,
      },
    };
}

export default App;