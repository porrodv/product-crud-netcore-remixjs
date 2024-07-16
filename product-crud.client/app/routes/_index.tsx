import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Product } from '~/interfaces/product.interface';
import { deleteProduct, getAllProducts } from '~/services/product.service';

import { Space, Table, Tag, Typography, Button } from 'antd';
import { Retry } from '~/components';

const { Link, Text } = Typography;

export const loader = async () => {
  const products = await getAllProducts();
  return json({ products });
};

export const ErrorBoundary = () => {
  return (
    <Retry
      description='No se pudieron obtener los datos correctamente'
      onClick={() => {
        location.reload();
      }}
    />
  );
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  const handleClick = async (id: number) => {
    alert('Eliminar');
  };

  return (
    <>
      <Table
        dataSource={products}
        pagination={{ pageSize: 5 }}
        style={{ minWidth: '700px' }}
      >
        <Table.Column title='Id' dataIndex='id' key='id' />
        <Table.Column title='Nombre' dataIndex='name' key='name' />
        <Table.Column
          title='Categoría'
          dataIndex='categoryName'
          key='categoryName'
          render={(categoryName: string) => (
            <Tag
              color={
                categoryName === 'Alimentos y bebidas'
                  ? 'geekblue'
                  : categoryName === 'Ropa y accesorios'
                    ? 'green'
                    : 'gold'
              }
            >
              {categoryName.toUpperCase()}
            </Tag>
          )}
        />
        <Table.Column
          title='Acciones'
          key='action'
          align='center'
          render={(_, record: Product) => (
            <Space size='small'>
              <Link href={`/edit/${record.id}`}>Editar</Link>
              <Button
                type='link'
                onClick={() => {
                  handleClick(record.id);
                }}
              >
                Eliminar
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
}
