import { title } from 'process';
import React from 'react'
import Reminder from '../models/Reminder';

interface ReminderListProps {
    items: Reminder[];
}

export default function ReminderList({ items }: ReminderListProps) {
  return (
    <ul>
        {items.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}
