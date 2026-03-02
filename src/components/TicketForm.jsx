import { useState } from "react";
import Parse from "../lib/parseClient";

export default function TicketForm({ticket}) {
    const [title, setTitle] = useState(ticket?.title ||'');
    const [description, setDescription] = useState(ticket?.description ||'');

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
            alert('Failed to save ticket. Please try again.');
         }

    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Save Ticket</button>
        </form>
    );
};