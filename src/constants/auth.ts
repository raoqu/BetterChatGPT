export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
export const defaultAPIEndpoint = import.meta.env.VITE_DEFAULT_API_ENDPOINT || 'https://chat.raeiou.com/api/chat/completions';

export const availableEndpoints = [defaultAPIEndpoint];
