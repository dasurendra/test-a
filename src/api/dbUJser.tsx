export const registerUser = async (userData: any) => {
  try {
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    return await response.json(); // Return response data if successful
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Throw the error for the caller to handle
  }
};

export const loginUser = async (userData: any) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to login user");
    }

    return await response.json(); // Return response data if successful
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error; // Throw the error for the caller to handle
  }
};
