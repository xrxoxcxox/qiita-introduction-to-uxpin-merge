import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { color, typography } from '../../styles/tokens'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
  onClick?: () => void
}

export const Button = ({
  children = 'button text',
  variant = 'primary',
  size = 'medium',
  className,
  onClick
}: Props): JSX.Element => {
  return (
    <button type="button" css={[styles.button, styles[variant], styles[size]]} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

const styles = {
  button: css`
    border-style: solid;
    border-radius: 8px;
    border-width: 2px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    padding: 8px 16px;
  `,
  primary: css`
    background-color: ${color.green[60]};
    border-color: transparent;
    color: ${color.text.primary};
  `,
  secondary: css`
    background-color: ${color.gray[0]};
    border-color: ${color.green[60]};
    color: ${color.text.secondary};
  `,
  small: css`
    font-size: ${typography.body2};
  `,
  medium: css`
    font-size: ${typography.body1};
  `,
  large: css`
    font-size: ${typography.subhead1};
  `
}
