import Head from 'next/head'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from '../store/actions/counter';
import styles from '../styles/Home.module.css'

export default function Home() {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.counter)

  return (
    <>
      <div className='text-center text-2xl'>{number}</div>
      <div>
        <button onClick={() => dispatch(decNumber())}>DEC</button>
        <button onClick={() => dispatch(incNumber())}>INC</button>
      </div>
    </>
  )
}
