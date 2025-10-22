import { Outlet } from 'react-router-dom';

import { HodlHero } from './components/HodlHero';
import { HodlAbout } from './components/HodlAbout';
import { HodlTokens } from './components/HodlTokens';
import { HodlEmpyreans } from './components/HodlEmpyreans';
import { HodlFounderNft } from './components/HodlFounderNft';
import { HodlMakeX } from './components/HodlMakeX';
import { HodlWhyJoin } from './components/HodlWhyJoin';
import { HodlCallToAction } from './components/HodlCallToAction';

// prettier-ignore
const styles = {
  landingContainer: 'landing-container flex flex-col items-center justify-center gap-10 bg-transparent px-2 pb-10 max-w-320 w-screen rounded-3xl overflow-hidden'
} satisfies Record<string, string>;

export const HodlLanding = () => (
  <div className={styles.landingContainer}>
    <HodlHero />
    <HodlAbout />
    <HodlTokens />
    <HodlEmpyreans />
    <HodlFounderNft />
    <HodlMakeX />
    <HodlWhyJoin />
    <HodlCallToAction />
    <Outlet />
  </div>
);
