import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { WidgetType } from 'types/widget.types';

import { DashboardHeader, LeftPanel, Widget } from './components';
import { HodlTokenClubHoldings, Transactions } from './widgets';
import styles from './dashboard.styles';

const dashboardWidgets: WidgetType[] = [
  {
    title: 'Transactions (All)',
    widget: () => <Transactions identifier='transactions-all' />,
    description: 'List transactions for the connected account',
    reference:
      'https://api.multiversx.com/#/accounts/AccountController_getAccountTransactions'
  }
];

export const Dashboard = () => {
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <div
        className={classNames(
          styles.mobilePanelContainer,
          styles.desktopPanelContainer
        )}
      >
        <LeftPanel
          isOpen={isMobilePanelOpen}
          setIsOpen={setIsMobilePanelOpen}
        />
      </div>

      <div
        style={{ backgroundImage: 'url(/background.svg)' }}
        className={classNames(styles.dashboardContent, {
          [styles.dashboardContentMobilePanelOpen]: isMobilePanelOpen
        })}
      >
        <DashboardHeader />

        <div className={styles.dashboardWidgets}>
          <HodlTokenClubHoldings />
          {dashboardWidgets.map((element) => (
            <Widget key={element.title} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};
