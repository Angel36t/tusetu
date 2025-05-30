import { useEffect } from "react";

const QrRedirect = () => {
  useEffect(() => {
    window.location.href =
      "https://linktr.ee/alexander_assad?utm_source=linktree_profile_share&ltsid=20048dcb-a0d7-43e9-84c6-887510b4a545";
  }, []);

  return <p>Redirigiendo a tu enlace...</p>;
};

export default QrRedirect;
