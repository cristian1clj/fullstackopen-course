import { useState } from 'react'
import Button from './components/Button'
import AnecdoteInfo from './components/AnecdoteInfo';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [votes, setVotes] = useState(Array(8).fill(0));
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVote = () => {
    const votesCopy = [ ...votes ];
    votesCopy[selected] += 1;
    setVotes([ ...votesCopy ]);

    let maxKey, maxVal = 0;
    for (let key in votesCopy){
      if (votesCopy[key] > maxVal){
        maxVal = votesCopy[key];
        maxKey = key;
      }
    }
    setMostVoted(maxKey);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <AnecdoteInfo anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text='next anecdote' onClick={handleNextAnecdote} />
      <Button text='vote' onClick={handleVote} />
      <h2>Anecdote with most votes</h2>
      <AnecdoteInfo anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  )
}

export default App