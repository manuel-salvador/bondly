import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });

  const address = token?.sub ?? null;

  return {
    props: {
      address,
      session,
    },
  };
};

export type AuthenticatedPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;
