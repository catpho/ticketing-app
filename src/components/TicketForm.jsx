"use client";
import { useState, useEffect } from 'react';
import Parse from '../lib/parseClient';

export default function TicketForm({ ticket }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!ticket) return;
    const getAttr = (obj, key) => (typeof obj.get === 'function' ? obj.get(key) : obj[key]);
    setTitle(getAttr(ticket, 'title') || '');
    setDescription(getAttr(ticket, 'description') || '');
  }, [ticket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Ticket = Parse.Object.extend('Ticket');
    const newTicket = ticket || new Ticket();
    newTicket.set('title', title);
    newTicket.set('description', description);

    try {
      await newTicket.save();
      alert('Ticket saved successfully!');
    } catch (error) {
      console.error('Error saving ticket:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save Ticket</button>
    </form>
  );
}