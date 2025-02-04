import { useNavigate } from "react-router-dom";

const Navigate = (to: string) => {
  const navigate = useNavigate();
  if (to) navigate(to);
};

export default Navigate;
