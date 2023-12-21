export const authUrl = "http://localhost:5000/api";
//curl -X POST localhost:5000/api/register -H 'Content-Type: application/json' -d '{"Email": "ayub@ayub.com", "Password": "12335", "Username": "ayubs"}'

export const postreq = async (url, bdy) => {
  console.log("********************************", bdy);
  const rsp = await fetch(url, {
    method: "POST",
    headers: { "Context-Type": "application/json" },
    body: JSON.stringify(bdy),
  });

  return rsp.json();
};
