export default async function handler(req, res) {
  if(req.method !== "POST"){
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if(!apiKey){
    return res.status(500).json({ error: "API key not configured" });
  }

  try{
    const { mode, payload } = req.body;

    const models = {
      basic: "gemini-3.5-flash-lite",
      advanced: "gemini-3.6-flash",
    };

    if(!models[mode]){
      return res.status(400).json({ error: "Invalid model mode" });
    }

    const url =  `https://generativelanguage.googleapis.com/v1beta/models/${models[mode]}:generateContent`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if(!response.ok){
        console.log("Gemini API Error: ",response.status, data)
    }

    return res.status(response.status).json(data);

  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}