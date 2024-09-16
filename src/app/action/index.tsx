const HOST_URL = process.env.NEXT_PUBLIC_API_SERVER_URL;

interface ApiData {
  url: string;
  params: RequestInit;
}

export const api = async ({ url, params }: ApiData) =>
  await fetch(`${HOST_URL}${`/${url}`}`, params);
