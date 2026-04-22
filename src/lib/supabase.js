import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://npzyjoekusjvnweyuemb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wenlqb2VrdXNqdm53ZXl1ZW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4ODAxNzUsImV4cCI6MjA5MjQ1NjE3NX0.rF7rNI4s-naDAtpxB-81eotYlCbq220I9vrKTCB9vEw'
)
