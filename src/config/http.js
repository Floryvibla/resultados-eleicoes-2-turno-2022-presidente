

export function getBaseUrl(state="br") {
  const baseUrl = `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/${state}/${state}-c0001-e000545-r.json`;
    
  return baseUrl;
}
