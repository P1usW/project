interface ReposInfo {
  name: string,
  description: string | null,
  private: boolean,
  html_url: string,
  fork: boolean,
  language: string,
  [key: string]: unknown,
}

interface UserInfo {
  name: string,
  login: string,
  bio: string,
  public_repos: number,
  avatar_url: string
  [key: string]: unknown,
}

export type {
  ReposInfo,
  UserInfo
}