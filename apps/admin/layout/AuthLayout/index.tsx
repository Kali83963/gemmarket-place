import { FC, ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => (
  <>
    {children} <ToastContainer />
  </>
);

export default AuthLayout;
