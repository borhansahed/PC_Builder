import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/cpu"}`}>
        Cpu
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/motherboard"}`}>
        Motherboard
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/ram"}`}>
        Ram
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/powerSupply"}`}>
        Power Supply
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/monitor"}`}>
        Monitor
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link className="text-lg font-medium" href={`${"/category/other"}`}>
        Other
      </Link>
    ),
    key: "6",
  },
];
const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const DropdownMenu: React.FC = () => (
  <Dropdown menu={{ items, onClick }}>
    <a
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Space className="text-xl ">
        Category
        <DownOutlined className="text-base mt[-14px]" />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
