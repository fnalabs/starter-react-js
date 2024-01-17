'use client'

import React, { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const CONTROLLER_CHANGE = 'controllerchange'
const locationReload = (): void => location.reload()

const ServiceWorker: FC<{}> = () => {
  const [serviceWorker, setServiceWorker] = useState(undefined as unknown as ServiceWorkerRegistration)
  const pathname = usePathname()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async function initWorker () {
      const isServiceWorker = typeof serviceWorker !== 'undefined'
      if (!isServiceWorker && 'serviceWorker' in navigator) {
        const sw = await navigator.serviceWorker.register('/sw.js')
        setServiceWorker(sw)

        navigator.serviceWorker.addEventListener(CONTROLLER_CHANGE, locationReload)
      }
      if (isServiceWorker) {
        const sw = await serviceWorker.update() as unknown as ServiceWorkerRegistration
        setServiceWorker(sw)
      }
    })()

    return () => navigator.serviceWorker?.removeEventListener(CONTROLLER_CHANGE, locationReload)
  }, [pathname])

  return (<div>{/* Create experience to show SW registration/updates */}</div>)
}

export default ServiceWorker
