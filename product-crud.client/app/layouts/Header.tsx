import { Layout } from 'antd';
const { Header: AntHeader } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#3f3f3f',
  height: 'auto',
  fontSize: '2.2rem',
  padding: '10px',
};

export default function Header() {
  return <AntHeader style={headerStyle}>Lista de productos</AntHeader>;
}
