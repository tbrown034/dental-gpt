import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const askGPT3 = async (question) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Answer questions about dental care\n\n${question}`,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text.trim();
};
