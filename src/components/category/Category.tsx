import { Card, Image } from "antd";
import Link from "next/link";
const { Meta } = Card;

interface IProps {
  img: string;
  title: string;
}
const Category = ({ img, title }: IProps) => {
  return (
    <>
      <Card
        className="w-[300px]"
        hoverable
        cover={<Image src={img} alt="example" height={200} />}
      >
        <Link href={`/category/${title}`}>
          <Meta title={title} />
        </Link>
      </Card>
    </>
  );
};

export default Category;
