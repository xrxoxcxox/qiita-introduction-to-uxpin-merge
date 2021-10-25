import { ComponentProps } from 'react'
import { css } from '@emotion/react'
import { color, typography } from '../../styles/tokens'
import { Button } from '../Button'
import { Typography } from '../Typography'

interface Props {
  image: boolean
  imageUrl?: string
  title: string
  titleAs?: ComponentProps<typeof Typography>['as']
  date: string
}

export const Card = ({
  image = false,
  imageUrl = 'https://placehold.jp/600x315.png',
  title = 'Card title',
  titleAs = 'span',
  date = '2021.2.3'
}: Props): JSX.Element => {
  return (
    <div css={styles.wrapper}>
      {image && <img src={imageUrl} alt="" css={styles.image} />}
      <div css={styles.information}>
        <Typography as={titleAs} css={styles.title}>
          {title}
        </Typography>
        <Typography as="time" css={styles.date}>
          {date}
        </Typography>
        <Button css={styles.button}>Read more</Button>
      </div>
    </div>
  )
}

const styles = {
  wrapper: css`
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0 0 0 / 0.12);
  `,
  image: css`
    border-radius: 12px 12px 0 0;
    display: block;
    width: 100%;
  `,
  information: css`
    display: flex;
    flex-direction: column;
    padding: 16px;
  `,
  title: css`
    color: ${color.text.primary};
    font-size: ${typography.subhead1};
    margin: 0;
  `,
  date: css`
    color: ${color.text.secondary};
    font-size: ${typography.body2};
    margin-top: 4px;
  `,
  button: css`
    margin-top: 16px;
    width: 100%;
  `
}
