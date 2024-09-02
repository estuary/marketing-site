import clsx from 'clsx';
import * as React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { globalWrapper, globalMainFixedHeader } from './styles.module.less';

const TakeATour = React.lazy(() => import('../TakeATour'));

const Layout = ({
    fixedHeader = true,
    children,
}: {
    fixedHeader?: boolean;
    children: React.ReactNode | React.ReactNode[];
}) => {
    return (
        <div className={globalWrapper}>
            <React.Suspense fallback={null}>
                <TakeATour />
            </React.Suspense>
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && globalMainFixedHeader)}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
