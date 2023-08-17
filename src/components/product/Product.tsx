import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;
const Product = () => {
  const img = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png";
  return (
    <>
      <Card
        className="w-[240px]"
        hoverable
        cover={<img className="w-[100]" src={img} alt="example" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};

export default Product;
