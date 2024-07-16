import { redirect, useLoaderData, useParams } from '@remix-run/react';
import { json, LoaderFunctionArgs } from '@remix-run/node';
import { getProductById, updateProduct } from '~/services/product.service';

import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { getAllCategories } from '~/services/category.service';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const update = await updateProduct(13, {
    name: 'Corbata',
  });

  const { productId } = params;

  if (productId === undefined) {
    throw new Error();
  }

  const product = await getProductById(parseInt(productId));

  const categories = await getAllCategories();

  return json({ product, categories });
};

export default function EditProduct() {
  const { product, categories } = useLoaderData<typeof loader>();

  const options = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  const onFinish = async (values: any) => {
    alert('bien');
  };

  return (
    <>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete='off'
        initialValues={{
          name: product.name,
          categoryId: product.categoryId.toString(),
          price: product.price.toString(),
        }}
      >
        <Form.Item
          label='Nombre'
          name='name'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Categoría'
          name='categoryId'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select options={options} style={{ textAlign: 'start' }} />
        </Form.Item>
        <Form.Item
          label='Precio'
          name='price'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <InputNumber style={{ width: 'auto' }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
