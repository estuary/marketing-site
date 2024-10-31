import clsx from 'clsx';
import * as React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { globalWrapper, globalMainFixedHeader } from './styles.module.less';
import ReleaseBanner from './ReleaseBanner';

const TakeATour = React.lazy(() => import('../TakeATour'));

interface LayoutProps {
    fixedHeader?: boolean;
    showReleaseBanner?: boolean;
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({
    fixedHeader = true,
    showReleaseBanner = false,
    children,
}: LayoutProps) => {
    return (
        <div className={globalWrapper}>
            <React.Suspense fallback={null}>
                <TakeATour />
            </React.Suspense>
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && globalMainFixedHeader)}>
                {showReleaseBanner ? (
                    <ReleaseBanner href="/deployment-options" />
                ) : null}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
