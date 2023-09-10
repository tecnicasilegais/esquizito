export interface DatabaseConfig {
  host?: string;
  user?: string;
  password?: string;
  database?: string;
}

export interface Auth0Config {
  enabled: boolean;
  audience?: string;
  domain?: string;
}

export interface CorsConfig {
  originUrl?: string;
  appPort: number;
}
