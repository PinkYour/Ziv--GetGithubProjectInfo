import { Octokit } from "./node_modules/octokit"
const octokit = new Octokit({
    auth: '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'
  })
  
 octokit.request('GET /rate_limit', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })