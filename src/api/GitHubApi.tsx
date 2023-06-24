interface UserInfo {
  name: string,
  public_repos: number,
  repos_url: string,
  [key: string]: unknown,
}

async function getUserInfo(username: string) {
  // try {
    
  // } catch (error) {
    
  // }
  const req = await fetch('https://api.github.com/users/P1usW');
  const result = await req.json() as UserInfo;

  return result
}

type ReturnUserInfo = ReturnType<typeof getUserInfo>

export {
  getUserInfo
}

export type {
  ReturnUserInfo,
  UserInfo
}
