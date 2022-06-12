import { useState } from "react";
import { FormattedGuess, UsedKeys } from "../interfaces";

export const useWordle = (solution: string) => {
  const [ turn, setTurn ] = useState(0)
  const [ currentGuess, setCurrentGuess ] = useState('')
  const [ guesses, setGuesses ] = useState<(FormattedGuess[])[]>([...Array(6)])
  const [ history, setHistory ] = useState<string[]>([])
  const [ isCorrect, setIsCorrect ] = useState(false)
  const [ usedKeys, setUsedKeys ] = useState<UsedKeys>({})

  const formatGuess = () => {
    const solutionArray: (string | null)[] = solution.split('')
    const formattedGuess: FormattedGuess[] = currentGuess.split('').map(letter => {
      return {
        key: letter,
        colour: 'grey'
      }
    })

    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === (letter as FormattedGuess).key) {
        formattedGuess[i].colour = 'green'
        solutionArray[i] = null
      }
    })

    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.colour !== 'green') {
        formattedGuess[i].colour = 'yellow'
        solutionArray[solutionArray.indexOf(letter.key)] = null
      }
    })

    return formattedGuess
  }

  const addNewGuess = (formattedGuess: FormattedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses(prev => {
      const newGuesses = [...prev]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prev => {
      return [...prev, currentGuess]
    })
    setTurn(prev => {
      return prev + 1
    })
    setUsedKeys(prev => {
      const newKeys = {...prev}

      formattedGuess.forEach(letter => {
        const currentColour = newKeys[letter.key]
        if (letter.colour === 'green') {
          newKeys[letter.key] = 'green'
          return
        }
        if (letter.colour === 'yellow' && currentColour !== 'green') {
          newKeys[letter.key] = 'yellow'
          return
        }
        if (letter.colour === 'grey' && currentColour !== ('green' || 'yellow')) {
          console.log(111111)
          newKeys[letter.key] = 'grey'
          return
        }
      })

      return newKeys
    })
    setCurrentGuess('')
  }

  const handleKeyup = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      if (turn < 5) {

      }
      if (history.includes(currentGuess)) {

      }
      if (currentGuess.length !== 5) {

      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        })
      }
    }
  }

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyup,
    usedKeys
  }
}
