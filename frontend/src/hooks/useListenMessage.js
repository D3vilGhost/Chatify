import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import usePerson from "../context/usePerson.js";


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = usePerson();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;