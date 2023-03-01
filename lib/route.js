export const registerUser = async (payload) => {
    const res = await fetch("/api/register", {
      body: JSON.stringify(payload),
      method: "POST",
    });
    const data = await res.json();
    return data;
  };