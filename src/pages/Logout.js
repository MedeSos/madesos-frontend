import { useNavigate } from 'react-router-dom';
export default function Logout() {
  const navigate = useNavigate();
  if(localStorage.getItem("token")){
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    localStorage.removeItem("id");
    window.location.reload();
    navigate('/login');
    return;
  }
}