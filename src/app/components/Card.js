import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export const CardExampleCardProps = (props) => (
  <Card
    image= {'/' + props.imageName}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot ids a sddound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)


export const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

// export default ButtonExampleEmphasis

// export default CardExampleCardProps