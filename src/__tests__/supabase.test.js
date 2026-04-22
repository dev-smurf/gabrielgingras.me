import { describe, it, expect } from 'vitest'
import { supabase } from '../lib/supabase.js'

describe('supabase client', () => {
  it('exports a supabase client instance', () => {
    expect(supabase).toBeDefined()
    expect(typeof supabase.from).toBe('function')
  })

  it('can reference the comments table', () => {
    const query = supabase.from('comments')
    expect(query).toBeDefined()
    expect(typeof query.select).toBe('function')
    expect(typeof query.insert).toBe('function')
  })
})
