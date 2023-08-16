import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const DropdownMenu: React.FC = () => (
  <Dropdown overlayStyle={{ fontSize: "40px" }} menu={{ items, onClick }}>
    <a
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Space className="text-xl ">
        Category
        <DownOutlined className="text-base mt[-12px]" />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownMenu;
