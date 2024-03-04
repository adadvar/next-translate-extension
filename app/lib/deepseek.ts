
const api_key = process.env.NEXT_PUBLIC_API_KEY

export const translate = async (params: { goalLng: string; text: string }) => {
  const path = 'https://api.deepseek.com/v1/chat/completions';

  const body = {
    messages: [
      {
        content: "You are a helpful assistant",
        role: "system"
      },
      {
        content: `translate into ${params.goalLng}: ${params.text}`,
        role: "user"
      }
    ],
    model: "deepseek-chat",
    frequency_penalty: 0,
    max_tokens: 2048,
    presence_penalty: 0,
    stop: null,
    stream: false,
    temperature: 1,
    top_p: 1
  };

  const config: RequestInit = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_key}`,
    },
    body: JSON.stringify(body)
  };
  try {
    const res = await fetch(path, config);

    const data = await res.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error(err);
    throw err;
  }
};