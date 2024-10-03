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
          Alert
        </Link>
        <Link href='/pages/autocomplete'>
          Autocomplete
        </Link>
        <Link href='/pages/avatar'>
          Avatar
        </Link>
        <Link href='/pages/badge'>
          Badge
        </Link>
        <Link href='/pages/button'>
          Button
        </Link>
        <Link href='/pages/check'>
          Check
        </Link>
        <Link href='/pages/color-picker'>
          Color Picker
        </Link>
        <Link href='/pages/float-button'>
          Float Button
        </Link>
        <Link href='/pages/input'>
          Input
        </Link>
        <Link href='/pages/link'>
          Link
        </Link>
        <Link href='/pages/pagination'>
          Pagination
        </Link>
        <Link href='/pages/pill'>
          Pill
        </Link>
        <Link href='/pages/progress'>
          Progress
        </Link>
        <Link href='/pages/scroll-area'>
          Scroll Area
        </Link>
        <Link href='/pages/select'>
          Select
        </Link>
        <Link href='/pages/separator'>
          Separator
        </Link>
        <Link href='/pages/slider'>
          Slider
        </Link>
        <Link href='/pages/snippet'>
          Snippet
        </Link>
        <Link href='/pages/switch'>
          Switch
        </Link>
        <Link href='/pages/table'>
          Table
        </Link>
        <Link href='/pages/text-area'>
          Text Area
        </Link>
        <Link href='/pages/tooltip'>
          ToolTip
        </Link>
        <Link href='/pages/typography'>
          Typography <Badge variant='success'>new</Badge>
        </Link>
      </aside>
    </ScrollArea>
  )
}
