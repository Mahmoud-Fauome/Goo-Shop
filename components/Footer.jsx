import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#447a48" }}
      className="text-center pt-4 pb-2 text-white"
    >
      <p>PRIVACY POLICY | TERMS OF SERVICE</p>
      <p>
        <MdCopyright className="me-1 mb-1" />
        2024 Market All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
