import asyncHandler from "../utils/asyncHandler.js";



const registerUser = asyncHandler(async (req, res) => {
   const { username, email, fullname } = req.body;
   console.log(username, email, fullname);



});

export { registerUser };  