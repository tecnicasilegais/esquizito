export function normalizePort(val: string): number {
  const portNumber = parseInt(val, 10);

  if (Number.isNaN(portNumber)) {
    // named pipe
    return parseInt(val, 10);
  }

  if (portNumber >= 0) {
    // port number
    return portNumber;
  }

  return 0;
}
