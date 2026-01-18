import { keywords, responseDatabase } from '../data/responses';

export function getResponseForMessage(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  for (const [keyword, category] of Object.entries(keywords)) {
    if (lowerMessage.includes(keyword)) {
      const responses = responseDatabase[category];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  }

  const generalResponses = responseDatabase.general;
  const randomIndex = Math.floor(Math.random() * generalResponses.length);
  return generalResponses[randomIndex];
}

export function getCategoryResponse(category: keyof typeof responseDatabase): string {
  const responses = responseDatabase[category];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
