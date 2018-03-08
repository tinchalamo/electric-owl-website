import React from 'react'
import { CampaignPostTemplate } from '../../templates/campaign-post'

const CampaignPostPreview = ({ entry, widgetFor }) => (
  <CampaignPostTemplate
    title={entry.getIn(['data', 'title'])}
    poster={entry.getIn(['data', 'poster'])}
    vimeoId={entry.getIn(['data', 'vimeoId'])}
    description={entry.getIn(['data', 'description'])}
  />
)

export default CampaignPostPreview
