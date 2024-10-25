export const makeUriBase = (protocol: string = "ws:", port: number = 3333) => {
  const hostname = `${window.location.hostname}:${port}`;
  const window_endpoint = `${protocol}//${hostname}`;
  return window_endpoint;
};

export const makeHttpUri = (route: string = "", port?: number) => {
  return `${makeUriBase("http:", port)}${route}`;
};
