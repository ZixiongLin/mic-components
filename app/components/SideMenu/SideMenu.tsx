import { ScrollArea } from '../ScrollArea'
import { Badge } from '../Badge'
import { Link } from '../Link'

export const SideMenu = ({ ...props }) => {
  return (
    <ScrollArea className='w-1/7 h-full max-h-screen min-h-screen py-8' {...props}>
      <aside className='flex flex-col'>
        <h1 className='text-lg px-4 font-bold'>
          Components
        </h1>
        <Link href='/pages/badge'>
          Badge <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/button'>
          Button <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Check <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Input <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Link <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Pill <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Progress <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          Separator <Badge variant='success'>new</Badge>
        </Link>
        <Link href='#'>
          TextArea <Badge variant='success'>new</Badge>
        </Link>
      </aside>
    </ScrollArea>
  )
}
