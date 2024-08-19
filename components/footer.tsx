'use client';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

import { siteConfig } from '@/config/site';

import { ModeToggle } from './mode-toggle';
import styles from './styles.module.css';

const author = 'zykson';

export const Footer = () => {
  const { twitter, github, youtube } = siteConfig.links;

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>copyright 2024 zyk</div>
      <div className={styles.settings}>
        <ModeToggle />
      </div>
      <div className={styles.social}>
        {twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${twitter}`}
            title={`Twitter @${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only"> twitter icon</span>
            <FaTwitter />
          </a>
        )}

        {github && (
          <a
            className={styles.github}
            href={`https://github.com/${github}`}
            title={`GitHub @${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only"> Github icon</span>

            <FaGithub />
          </a>
        )}

        {youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${youtube}`}
            title={`YouTube ${author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only"> YouTube icon </span>

            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  );
};
