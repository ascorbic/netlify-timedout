import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../layouts/Layout'
import HomeSelection from '../../components/HomeSelection'
import { useState, useEffect } from "react";

export default function Dashboard() {

  return (
    <>
      <Head>
        <title>Test Démo | Dashboard</title>
        <meta name="description" content="Bienvenue sur le dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeSelection></HomeSelection>
      </Layout>
    </>
  )
}