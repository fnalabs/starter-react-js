import React, { FC, ReactNode } from 'react'
import ReactGA from 'react-ga4'
import { useConsent } from '../../contexts/Consent'

export enum LinkTarget { BLANK = '_blank', PARENT = '_parent', TOP = '_top' }
export interface ILinkAttrs {
  ariaLabel?: string
  'aria-label'?: string
  className?: string
  onClick?: () => {}
  rel?: string
  target?: LinkTarget
}
export interface IAnalyticsLink extends ILinkAttrs {
  children: ReactNode
  to: string
}

const AnalyticsLink: FC<IAnalyticsLink> = ({ ariaLabel, children, className, onClick, rel, target, to }) => {
  const consent = useConsent()

  const attrs: ILinkAttrs = typeof target !== 'undefined' ? { target } : {}
  if (className?.length !== 0) attrs.className = className
  if (rel?.length !== 0) attrs.rel = rel
  if (ariaLabel?.length !== 0) attrs['aria-label'] = ariaLabel

  const handleClick = (): void => {
    if (consent) ReactGA.event({ action: 'Click', category: 'Outbound', label: to })
    if (typeof onClick === 'function') onClick()
  }

  return <a href={to} onClick={handleClick} {...attrs}>{children}</a>
}
export default AnalyticsLink
