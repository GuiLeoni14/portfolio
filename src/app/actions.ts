'use server'

import { sql } from '@vercel/postgres'

export async function saveLead({
  name,
  email,
  phoneNumber,
}: {
  name: string
  email: string
  phoneNumber: string
}) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS BudgetRequest  ( Name varchar(255), Email varchar(255), PhoneNumber varchar(25) )`

    await sql`INSERT INTO BudgetRequest (name, email, phoneNumber) VALUES (${name}, ${email}, ${phoneNumber})`
  } catch (error) {
    console.log(error)
  }
}
