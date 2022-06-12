import { useState } from "react";
import { FormattedGuess } from "../interfaces";

export const useWordle = (solution: string) => {
  const [ turn, setTurn ] = useState(0)
  const [ currentGuess, setCurrentGuess ] = useState('')
  const [ guesses, setGuesses ] = useState([...Array(6)])
  const [ history, setHistory ] = useState<string[]>([])
  const [ isCorrect, setIsCorrect ] = useState(false)

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
      newGuesses[turn] = formatGuess
      return newGuesses
    })
    setHistory(prev => {
      return [...prev, currentGuess]
    })
    setTurn(prev => {
      return prev + 1
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
    handleKeyup
  }
}
