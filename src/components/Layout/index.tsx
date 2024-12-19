import clsx from 'clsx';
import { lazy, ReactNode, Suspense } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { globalWrapper, globalMainFixedHeader } from './styles.module.less';
import ReleaseBanner from './ReleaseBanner';

const TakeATour = lazy(() => import('../TakeATour'));

interface LayoutProps {
    fixedHeader?: boolean;
    showReleaseBanner?: boolean;
    children: ReactNode | ReactNode[];
}

const Layout = ({
    fixedHeader = true,
    showReleaseBanner = false,
    children,
}: LayoutProps) => {
    return (
        <div className={globalWrapper}>
            <Suspense fallback={null}>
                <TakeATour />
            </Suspense>
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && globalMainFixedHeader)}>
                {showReleaseBanner ? <ReleaseBanner /> : null}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
