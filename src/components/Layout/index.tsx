import clsx from 'clsx';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { globalWrapper, globalMainFixedHeader } from './styles.module.less';
import ReleaseBanner from './ReleaseBanner';

// const TakeATour = lazy(() => import('../TakeATour'));

interface LayoutProps {
    hideFooter?: boolean;
    fixedHeader?: boolean;
    showReleaseBanner?: boolean;
    children: ReactNode | ReactNode[];
}

const Layout = ({
    hideFooter = false,
    fixedHeader = true,
    showReleaseBanner = false,
    children,
}: LayoutProps) => {
    return (
        <div className={globalWrapper}>
            {/*            <Suspense fallback={null}>
                <TakeATour />
            </Suspense>*/}
            <Header fixedHeader={fixedHeader} />
            <main className={clsx(fixedHeader && globalMainFixedHeader)}>
                {/* {showReleaseBanner ? <ReleaseBanner /> : null} */}
                {children}
            </main>
            {hideFooter ? null : <Footer />}
        </div>
    );
};

export default Layout;
