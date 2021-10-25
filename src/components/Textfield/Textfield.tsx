import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { color, typography } from '../../styles/tokens'

interface Props {
  label?: string
  placeholder?: string
}

export const Textfield = forwardRef<HTMLInputElement, Props>(({ label, placeholder }: Props, ref) => {
  return (
    <div css={styles.wrapper}>
      {label && (
        <label htmlFor={label} css={styles.label}>
          {label}
        </label>
      )}
      <input type="text" ref={ref} placeholder={placeholder} css={styles.input} id={label} />
    </div>
  )
})

Textfield.displayName = 'Textfield'

const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    width: fit-content;
  `,
  input: css`
    border: 1px solid ${color.divider};
    border-radius: 8px;
    font-size: ${typography.body1};
    padding: 8px;
  `,
  label: css`
    color: ${color.text.primary};
    font-size: ${typography.body2};
    margin-bottom: 4px;
  `
}
