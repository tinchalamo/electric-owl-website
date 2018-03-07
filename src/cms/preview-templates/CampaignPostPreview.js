import React from 'react'
import { CampaignPostTemplate } from '../../templates/campaign-post'

const CampaignPostPreview = ({ entry, widgetFor }) => (
  <CampaignPostTemplate
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default CampaignPostPreview
