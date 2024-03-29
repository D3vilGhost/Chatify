import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

function useSignup(){
	const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

        let loading=toast.loading("Processing...")

		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			toast.success(`Welcome ${fullName} !`);
		} catch (error) {
			toast.error(error.message);
		}finally{
            toast.remove(loading);
        }
	};

	return { signup };
}
export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}
	
	if(username.includes(" ")){
		toast.error("Username cannot have space in it!");
		return false;
	}
	
	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}