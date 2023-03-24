// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
import * as dotenv from 'dotenv';
import { fs } from 'file-system';
dotenv.config({ path: './.env.local' });
const airKey = process.env.AIRTABLE_KEY;
console.log(airKey);

// const supabase = createClient(supabaseUrl, supabaseKey);

export default airKey;
