import * as core from '@actions/core'
import {google} from 'googleapis'

async function run(): Promise<void> {
  const docs = google.docs({version: 'v1', auth: core.getInput('access_token')})
  const documentId = core.getInput('source_document_id')

  const res = await docs.documents.get({documentId})
  if (res.status !== 200) {
    core.setFailed(
      `failed to get doc. status:${res.statusText}, documentId:${documentId}`
    )
    return
  }

  const docBody = res.data.body?.content
  if (docBody) {
    for (const el of docBody) {
      core.setOutput('response data body content', el)
    }
  }

  return
}

run()
