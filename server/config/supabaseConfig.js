const {createClient} = require("@supabase/supabase-js")

const supabaseUrl = process.env.API_URL
const supabaseKey = process.env.ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase