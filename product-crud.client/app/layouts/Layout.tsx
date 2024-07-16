import { Outlet } from '@remix-run/react';
import { Layout as AntLayout } from 'antd';
import { Header } from '~/layouts';

const { Content } = AntLayout;

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
  backgroundColor: '3f3f3f',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '3rem',
  height: '100%',
};

export default function Layout() {
  return (
    <AntLayout style={layoutStyle}>
      <Header />
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </AntLayout>
  );
}
