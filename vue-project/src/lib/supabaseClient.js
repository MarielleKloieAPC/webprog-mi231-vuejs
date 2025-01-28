import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://mrghrcqsodsjxprppqer.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZ2hyY3Fzb2RzanhwcnBwcWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODg0NTYsImV4cCI6MjA1MzY2NDQ1Nn0.0WMl0Y1E23d5QKQofxKviyAlG2aYZb1-agQ1vKxW3vo')