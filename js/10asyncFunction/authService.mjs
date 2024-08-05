async function login(username, password) {
    // Validate user credentials asynchronously
    let user = await User.findOne({ username, password });
    if (user) {
        // Generate and return JWT token
        let token = generateToken(user);
        return { success: true, token };
    } else {
        return { success: false, message: 'Invalid credentials' };
    }
}
