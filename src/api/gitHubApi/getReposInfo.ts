import axios, { AxiosError } from "axios";
import { axiosConfig } from "@src/constant/gitHubConstant";
import { ReposInfo } from "@src/interface/gitHubInterface";

async function getReposInfo(username: string, page = 1) {
  try {
    const req = await axios.get(`/users/${username}/repos`, Object.assign(
      {},
      axiosConfig
    ));
    return req.data as ReposInfo[]
  } catch (err) {
    const error = err as AxiosError;

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return error.name
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      return error.name
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      return error.name
    }
  }
}

type ReturnReposInfo = ReturnType<typeof getReposInfo>

export {
  getReposInfo
}

export type {
  ReposInfo,
  ReturnReposInfo
}