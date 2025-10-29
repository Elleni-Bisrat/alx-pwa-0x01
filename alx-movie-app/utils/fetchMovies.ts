export async function fetchMovies() {
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Request failed: " + response.status);
  return response.json();
}
