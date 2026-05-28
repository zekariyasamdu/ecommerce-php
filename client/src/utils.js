export function parseRequestURL() {
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
}

export async function simulateDelay(ms = 1000) {
  await new Promise((res) => {
    setTimeout(() => {
      console.log("finished");
      res();
    }, ms);
  });
}
