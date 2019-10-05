import React from 'react'
import { withRouter } from 'react-router-dom'

import { MenuItemContainer, ImageContainer, MenuItemContent, ContentTitle, ContentSubtitle } from './menu-item.styles'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <MenuItemContainer 
    size={size} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <ImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <MenuItemContent className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
)

export default withRouter(MenuItem)