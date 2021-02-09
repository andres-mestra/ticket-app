export const getUltimos =  async () => {
  const resp = await fetch(`${process.env.REACT_APP_HOST_REST}/ultimos`)
  const data = await resp.json();
  return data.ultimos;
}
