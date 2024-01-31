'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from '../../form.module.css'
import type { FormStepTwo } from '@/types/type'
import { useSession } from 'next-auth/react'
import { createFormOrUpdate, getForm } from '@/services/formServices'

export default function StepTwo() {
  const { data: session } = useSession()
  const [formInfo, setFormInfo] = useState<FormStepTwo>({
    userId: session?.user?.email || '',
    stepTwo: {
      address: '',
      postalCode: ''
    }
  })

  console.log(formInfo)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await createFormOrUpdate(formInfo)
    if (data.error) {
      throw new Error('somenting went wrong')
    }
  }

  const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      stepTwo: {
        ...formInfo.stepTwo,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    if (session?.user?.email) {
      const getDataForm = async () => {
        const data = await getForm(session?.user?.email)

        data?.stepTwo &&
          setFormInfo({
            ...formInfo,
            stepTwo: {
              address: data.stepTwo.address,
              postalCode: data.stepTwo.postalCode
            }
          })
        console.log(data)
      }
      getDataForm()
    }
  }, [session?.user])

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.title}> Fill information</p>

        <label>
          <input
            name='address'
            className={styles.input}
            type='text'
            placeholder=''
            required
            onChange={handleForm}
            value={formInfo?.stepTwo?.address}
          />
          <span>Address</span>
        </label>

        <label>
          <input
            name='postalCode'
            className={styles.input}
            type='text'
            placeholder=''
            required
            onChange={handleForm}
            value={formInfo?.stepTwo?.postalCode}
          />
          <span>Postal code</span>
        </label>

        <button className={styles.submit}>Save</button>
      </form>
    </div>
  )
}
