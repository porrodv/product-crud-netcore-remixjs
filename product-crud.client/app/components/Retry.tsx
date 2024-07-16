import { Button, Result } from 'antd';

interface Props {
  title?: string;
  description?: string;
  onClick: () => void;
}

export default function Retry({
  title = 'Error inesperado',
  description = 'No se pudo realizar la acción satisfactoriamente',
  onClick,
}: Props) {
  return (
    <Result
      status='warning'
      title={title}
      subTitle={description}
      extra={
        <Button type='primary' onClick={onClick}>
          Reintentar
        </Button>
      }
    ></Result>
  );
}
