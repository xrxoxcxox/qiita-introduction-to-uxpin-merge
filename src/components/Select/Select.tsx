import { css } from '@emotion/react'
import { color, typography } from '../../styles/tokens'
import { MdOutlineArrowDropDown } from 'react-icons/md'

interface Props {
  label?: string
  name: string
  options: { value: string; name: string }[]
}

const defaultOptions = [
  {
    value: '1st',
    name: '1st item'
  },
  {
    value: '2nd',
    name: '2nd item'
  },
  {
    value: '3rd',
    name: '3rd item'
  }
]

export const Select = ({ label, name, options = defaultOptions }: Props): JSX.Element => {
  const items = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    )
  })
  return (
    <div css={styles.wrapper}>
      {label && (
        <label htmlFor={label} css={styles.label}>
          {label}
        </label>
      )}
      <div css={styles.inner}>
        <select name={name} css={styles.select} id={label}>
          {items}
        </select>
        <MdOutlineArrowDropDown css={styles.icon} />
      </div>
    </div>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    width: fit-content;
  `,
  inner: css`
    position: relative;
  `,
  select: css`
    appearance: none;
    border: 1px solid ${color.divider};
    border-radius: 8px;
    font-size: ${typography.body1};
    padding: 8px 32px 8px 8px;
  `,
  icon: css`
    bottom: 50%;
    color: ${color.text.secondary};
    pointer-events: none;
    position: absolute;
    right: 8px;
    transform: translateY(50%);
  `,
  label: css`
    color: ${color.text.primary};
    font-size: ${typography.body2};
    margin-bottom: 4px;
  `
}
