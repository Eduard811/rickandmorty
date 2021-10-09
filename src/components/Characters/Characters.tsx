import { useEffect } from 'react'
import { useActions } from '../../hook/useAction'
import { useTypedSelector } from '../../hook/useTypedSelector'
import { styled } from '@mui/material/styles'

import Character from '../Character/Character'
import CharacterSkeleton from '../Character/CharacterSkeleton'
import SortMenu from '../SortMenu/SortMenu'
import CryRick from '../CryRick/CryRick'

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
})

const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  marginTop: '20px',
  padding: '0 10px 0 10px',
  gridGap: '10px',
  [theme.breakpoints.up('sm')]: {
    padding: 'unset',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '20px',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))

export default function Characters() {
  const { characters, isFetching, page, sortBy } = useTypedSelector((state) => state.characters)
  const { getCharactersAC } = useActions()

  useEffect(() => {
    getCharactersAC(page)
  }, [])

  return (
    <>
      <Header>
        <SortMenu />
      </Header>
      <Container>
        {isFetching ? (
          Array(20)
            .fill(0)
            .map((_, index) => <CharacterSkeleton key={index} />)
        ) : characters.length === 0 ||
          (sortBy === 'My favorites' && characters.every((character) => !character.isFavorite)) ? (
          <CryRick />
        ) : (
          characters.map((character) =>
            sortBy === 'All' ? (
              <Character key={character.id} {...character} />
            ) : (
              character.isFavorite && <Character key={character.id} {...character} />
            )
          )
        )}
      </Container>
    </>
  )
}
