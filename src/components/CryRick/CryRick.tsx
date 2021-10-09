import { useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
import lottie from 'lottie-web'
import cryrickanimation from '../../animations/cryrickanimation.json'

const Rick = styled('div')({
  position: 'absolute',
  bottom: -10,
  left: 0,
})

export default function CryRick() {
  const rick = useRef(null)

  useEffect(() => {
    if (!!rick.current) {
      lottie.loadAnimation({
        container: rick.current,
        animationData: cryrickanimation,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      })
    }
  }, [rick])

  return <Rick ref={rick} />
}
