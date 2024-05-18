'use client'

import useDarkMode from '@/hooks/use-dark-mode'
import {Moon, Sun} from 'lucide-react'
import Button from './button'

export default function DarkModeToggle({defaultMode = 'light'}) {
  const {theme, toggleTheme} = useDarkMode(defaultMode)
  return <Button variant="ghost" size="sm" onClick={toggleTheme}>


    { theme === 'light' ? <Moon size={16} /> :<Sun size={16} />}


    {/* {! theme ? <Sun  className='w-4 h-4' /> :<Moon className='w-4 h-4'/> } */}

    {/* {theme === 'light' && <Moon className="w-4 h-4" />}
    {theme === 'dark' && <Sun className="w-4 h-4" />} */}
  </Button>
}