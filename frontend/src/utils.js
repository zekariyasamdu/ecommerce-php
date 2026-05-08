export const parseRequestURL = () => {
  const url = window.location.hash.toLowerCase();
  console.log(url);
  const request = url.split("/");
  console.log({
    resource: request[1],
    id: request[2],
  });
  return {
    resource: request[1],
    id: request[2],
  };
};
