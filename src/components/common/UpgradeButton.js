import React from 'react'
import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  overflow: hidden;
  margin-top: 25px;
`

const Button = styled(AntdButton)`
  border-radius: 3px;
`

const UpgradeButton = React.forwardRef(
  ({ localFromVersion, localToVersion, onShowDiff, ...props }, ref) => (
    <Container>
      <Button
        {...props}
        ref={ref}
        type="primary"
        size="large"
        onClick={() =>
          onShowDiff({
            fromVersion: localFromVersion,
            toVersion: localToVersion
          })
        }
      >
        Show me how to upgrade!
      </Button>
    </Container>
  )
)

export default UpgradeButton
