import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // Disallow all AI bots
                userAgent: [
                    'GPTBot', 'ChatGPT-User',
                    'ClaudeBot', 'anthropic-ai', 'CCBot',
                    'FacebookBot', 'Twitterbot',
                    'PerplexityBot', 'OmigiliBot',
                    'AISearchBot', 'mlbot', 'PetalBot',
                    'Amazonbot', 'DuckAssistBot', 'OAI-SearchBot',
                    'OAI-SearchBot', 'omgili', 'omgilibot',
                    'PerplexityBot', 'Webzio-Extended',
                    'Meta-ExternalAgent', 'Meta-ExternalFetcher',
                    'cohere-ai'],
                disallow: ['/'],
            },
        ]
    }
}