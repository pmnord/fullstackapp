import Button from 'components/Button';
import Layout from 'components/Layout';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import plantsJson from '__mocks__/plants.json';

type Props = {
  plant: Plant;
};

const PlantPage: NextPage<Props> = ({ plant }) => {
  return (
    <Layout>
      <Head>
        <title>HousePlantr | {plant.name}</title>
      </Head>
      <h1 className='text-4xl font-bold text-center'>{plant.name}</h1>
      <Image
        className='rounded'
        width={400}
        height={500}
        src={plant.image}
        alt=''
      />
      {/* TODO: PlantInfo component */}
      {/* TODO: User actions component (favorite, share, add picture) */}
      {/* TODO: Comments component  */}
      {/* TODO: Comment box component dependant on logged in */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <span className='text-2xl font-bold'>Leave a comment</span>
          <input
            className='block border-black border-2 rounded p-2'
            type='textarea'
          />
        </label>
        <Button
          className='mt-1 p-2 bg-gradient-to-br from-green-400 to-green-800 text-green-50 rounded color font-bold shadow-lg active:translate-y-0.5'
          type='submit'
        >
          SUBMIT
        </Button>
      </form>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { id, slug },
}) => {
  try {
    const plants: Record<string, Plant> = plantsJson;
    const plant = plants[id as string];
    if (!plant || plant.slug !== slug) throw Error('Plant not found');

    return {
      props: {
        plant,
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: {
        destination: '/Error404',
        statusCode: 404,
      },
    };
  }
};

export default PlantPage;
