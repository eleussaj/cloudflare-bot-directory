/**
 * Bot category types from CloudFlare Radar
 */
export type BotCategory =
  | 'ACADEMIC_RESEARCH'
  | 'ACCESSIBILITY'
  | 'ADVERTISING_AND_MARKETING'
  | 'AGGREGATOR'
  | 'AI_ASSISTANT'
  | 'AI_CRAWLER'
  | 'AI_SEARCH'
  | 'ARCHIVER'
  | 'FEED_FETCHER'
  | 'MONITORING_AND_ANALYTICS'
  | 'OTHER'
  | 'PAGE_PREVIEW'
  | 'SEARCH_ENGINE_CRAWLER'
  | 'SEARCH_ENGINE_OPTIMIZATION'
  | 'SECURITY'
  | 'SOCIAL_MEDIA_MARKETING'

/**
 * Bot kind types
 */
export type BotKind = 'BOT' | 'AGENT'

/**
 * A verified bot entry from CloudFlare Radar Bot Directory
 */
export interface Bot {
  /** URL-friendly unique identifier */
  slug: string
  /** Human-readable bot name */
  name: string
  /** Bot kind classification */
  kind: BotKind
  /** Company or organization operating the bot */
  operator: string | null
  /** URL to operator's documentation or website */
  operatorUrl: string | null
  /** Bot category classification */
  category: BotCategory
  /** Description of what the bot does */
  description: string | null
  /** Whether the bot respects robots.txt */
  followsRobotsTxt: boolean
  /** User agent pattern(s) for matching */
  userAgentPatterns: string[]
  /** Known user agent string(s) */
  userAgents: string[]
}

/**
 * Array of all verified bots from CloudFlare Radar Bot Directory
 */
declare const bots: Bot[]

export default bots
