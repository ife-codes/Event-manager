const supabase = require("../config/supabaseConfig");
const bcrypt = require("bcrypt");

const login = async (req, res) => {};

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const { data: existingUser, error: findError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single()

  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // const salt = bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("users").insert([{
    full_name: username,
    email,
    password: hashedPassword,
  }]);

  if (error) {
    return res.status(500).json({ message:"Sign Up failed", error });
  }

  return res.status(201).json({ message: "Sign Up successful" });
};

const logout = async (req, res) => {};

const refresh = async (req, res) => {};

const whoami = async (req, res) => {};

module.exports = {
  login,
  signup,
  refresh,
  logout,
  whoami,
};
