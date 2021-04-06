import { FC } from 'react';
import { Container } from 'reactstrap';

const Layout: FC = ({ children }) => <Container className="text-center">{children}</Container>;

export default Layout;
