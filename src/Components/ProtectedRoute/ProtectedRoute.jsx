import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/User.context';

export default function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);

  if (token) {
    return children; // ✅ يعرض الصفحة المحمية
  } else {
    return <Navigate to="/login" />; // ✅ يعيد التوجيه لصفحة تسجيل الدخول
  }
}
