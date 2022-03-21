import Layout from '@/components/Layout';
import { IPlant } from '@types';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';

type Props = {
  id: string;
};

const PlantPage: NextPage<Props> = ({ id }) => {
  const [plant, setPlant] = React.useState<IPlant>();

  React.useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/plants/1')
      .then((res) => res.json())
      .then((res) => setPlant(res));
  }, []);

  return (
    <Layout>
      <div className='bg-zinc-800 h-screen'>
        <div className='text-sky-300 text-3xl'>
          {plant && JSON.stringify(plant)}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id;

    return {
      props: {
        id,
      },
    };
  } catch (error: any) {
    return {
      props: {
        errors: error.message,
      },
    };
  }
};

export default PlantPage;
