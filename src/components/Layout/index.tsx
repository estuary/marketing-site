import { ReactNode } from 'react';
import clsx from 'clsx';
import Footer from '../Footer';
import Header from '../Header';
import {
    globalWrapper,
    globalMainFixedHeader,
    lightSections,
} from './styles.module.less';
import ReleaseBanner from './ReleaseBanner';

// const TakeATour = lazy(() => import('../TakeATour'));

interface LayoutProps {
    showReleaseBanner?: boolean;
    hasLightSections?: boolean;
    mainClassName?: string;
    children: ReactNode | ReactNode[];
}

const Layout = ({
    showReleaseBanner = false,
    hasLightSections = false,
    mainClassName,
    children,
}: LayoutProps) => {
    return (
        <div className={globalWrapper}>
            {/*            <Suspense fallback={null}>
                <TakeATour />
            </Suspense>*/}
            <Header />
            <main
                className={clsx(
                    globalMainFixedHeader,
                    hasLightSections ? lightSections : null,
                    mainClassName
                )}
            >
                {showReleaseBanner ? <ReleaseBanner /> : null}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
