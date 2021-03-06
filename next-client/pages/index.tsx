import Layout from 'components/Layout';
import PlantCard from 'components/PlantCard';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import plantsJson from '__mocks__/plants.json';

const plants: Plant[] = Object.values(plantsJson);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HousePlantr</title>
      </Head>

      <Layout>
        <ul className='grid grid-cols-3'>
          {plants.map((plant) => (
            <li key={plant.id} className='p-4'>
              <PlantCard plant={plant} />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Home;
