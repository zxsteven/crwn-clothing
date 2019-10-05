import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import './collections-overview.styles'
import { OverviewContainer } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => (
  <OverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </OverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)