import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { globalWrapper, globalMainFixedHeader } from './styles.module.less';
import ReleaseBanner from './ReleaseBanner';

// const TakeATour = lazy(() => import('../TakeATour'));

interface LayoutProps {
    showReleaseBanner?: boolean;
    children: ReactNode | ReactNode[];
}

const Layout = ({ showReleaseBanner = false, children }: LayoutProps) => {
    return (
        <div className={globalWrapper}>
            {/*            <Suspense fallback={null}>
                <TakeATour />
            </Suspense>*/}
            <Header />
            <main className={globalMainFixedHeader}>
                {showReleaseBanner ? <ReleaseBanner /> : null}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
