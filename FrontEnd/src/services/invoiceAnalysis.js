// import axios from "axios";

// const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

// export const analyzeInvoiceImage = async (file, { signal } = {}) => {
//   const formData = new FormData();
//   formData.append("image", file);

//   const response = await axios.post(
//     `${apiBaseUrl}/api/upload/image`,
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       signal,
//     }
//   );

//   console.log(response.data.webhook.data);

//   return response.data.webhook.data;
// };
import { apiClient } from "./apiClient";

export const analyzeInvoiceImage = async (file, { signal } = {}) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await apiClient.post("/api/upload/image", formData, {
    signal,
  });

  return response.data.webhook.data;
};
