import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function EgTile({topic}) {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">{topic}</p>
        </div>
      </div>
    </div>
  );
}

function EgHero({topic}) {
  return (
    <figure className="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png"/>
    </figure>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <EgHero />
          <EgTile topic="Twitter"/>
          <EgTile topic="Twitch"/>
          <EgTile topic="Ko-fi"/>
          <EgTile topic="Soundcloud"/>
          <hr />
          <EgTile topic="YouTube 1"/>
          <EgTile topic="YouTube 2"/>
          <EgTile topic="YouTube 3"/>
        </div>
      </main>
    </Layout>
  );
}
