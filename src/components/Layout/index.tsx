import {FC, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import {GoToTop} from '../../components';
import './Layout.scss';
export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const {hash, pathname} = useLocation();
  const isHomepage = pathname === '/';
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash, pathname]);

  return (
    <div className="Layout" data-testid="Layout">
      <div className={clsx({Layout__content: isHomepage, Layout__home: isHomepage})} data-testid="Layout__content">
        {children}
      </div>
      <div className="Layout__footer-wrapper">
        <GoToTop/>
      </div>
    </div>
  );
};

export default Layout;