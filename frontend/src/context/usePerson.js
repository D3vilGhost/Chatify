import { create } from "zustand";

const usePerson = create((set) => ({
	selectedPerson: null,
	setSelectedPerson: (selectedPerson) => set({ selectedPerson}),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default usePerson;