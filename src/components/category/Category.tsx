import { Card } from "antd";
const { Meta } = Card;
const Category = () => {
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

export default Category;
