export const useFetch = () => {
  const responseFetch = async ({ path, method, data }) => {
    const url = "http://localhost:9999/api/" + path;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const respJSON = await response.json();

    return respJSON;
  };

  return { responseFetch };
};
