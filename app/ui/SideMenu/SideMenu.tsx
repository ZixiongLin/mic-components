import { ScrollArea } from '../../components/ScrollArea'
import { Badge } from '../../components/Badge'
import { Link } from '../../components/Link'

export const SideMenu = ({ ...props }): JSX.Element => {
  return (
    <ScrollArea className='w-1/7 h-full max-h-screen min-h-screen py-8 scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2' {...props}>
      <aside className='flex flex-col'>
        <h1 className='text-lg px-4 font-bold'>
          Components
        </h1>
        <Link href='/pages/alert'>
          Alert <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/autocomplete'>
          Autocomplete <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/avatar'>
          Avatar <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/badge'>
          Badge
        </Link>
        <Link href='/pages/button'>
          Button
        </Link>
        <Link href='/pages/check'>
          Check <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/color-picker'>
          Color Picker <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/float-button'>
          Float Button <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/input'>
          Input <Badge variant='progress'> Updated</Badge>
        </Link>
        <Link href='/pages/link'>
          Link <Badge variant='progress'> Updated</Badge>
        </Link>
        <Link href='/pages/pagination'>
          Pagination <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/pill'>
          Pill
        </Link>
        <Link href='/pages/progress'>
          Progress <Badge variant='progress'> Updated</Badge>
        </Link>
        <Link href='/pages/scroll-area'>
          Scroll Area <Badge variant='success'> new</Badge>
        </Link>
        <Link href='/pages/select'>
          Select <Badge variant='success'> new</Badge>
        </Link>
        <Link href='/pages/separator'>
          Separator <Badge variant='success'>New</Badge>
        </Link>
        <Link href='/pages/slider'>
          Slider <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/snippet'>
          Snippet <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/switch'>
          Switch <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/table'>
          Table <Badge variant='success'>new</Badge>
        </Link>
        <Link href='/pages/text-area'>
          Text Area <Badge variant='progress'>Updated</Badge>
        </Link>
        <Link href='/pages/tooltip'>
          ToolTip <Badge variant='progress'>new</Badge>
        </Link>
      </aside>
    </ScrollArea>
  )
}
