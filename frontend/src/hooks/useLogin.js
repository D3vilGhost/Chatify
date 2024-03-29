import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

function useLogin(){

    const { setAuthUser } = useAuthContext();

    const login=async ({username,password})=>{

        const success = handleInputErrors(username, password);
		if (!success) return;

        const loading=toast.loading("Processing...");

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			toast.success(`Welcome ${data.username} !`);
		} catch (error) {
			toast.error(error.message);
		} finally {
			toast.remove(loading);
		}
	};

	return { login };
}
export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	if(username.includes(" ")){
		toast.error("Username cannot have space in it!");
		return false;
	}

	return true;
}