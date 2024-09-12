import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

    return (
      <>
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-msg">Oups! La page que vous demandez n'existe pas.</div>
      <div className="back-to-homepage" onClick={handleBackToHome}>
        Retournez à la page d'accueil
      </div>
    </div>
      </>
    );
  };
  
  export default ErrorMessage;
  