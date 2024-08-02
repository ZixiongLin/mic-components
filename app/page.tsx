import { Alert } from './components/Alert'
import { Autocomplete } from './components/Autocomplete/Autocomplete'
import { Avatar } from './components/Avatar'
import { Check } from './components/Check'
import { ColorPicker } from './components/ColorPicker'
import { FloatButton } from './components/FloatButton'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { Pagination } from './components/Pagination'
import { Progress } from './components/Progress'
import { ScrollArea } from './components/ScrollArea'
import { Separator } from './components/Separator'
import { Slider } from './components/Slider'
import { Snippet } from './components/Snippet/Snippet'
import { Textarea } from './components/Textarea'

export default function Home (): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#ffffff]'>
      <h1>Alert</h1>
      <Alert subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit' title='Hey you gave a notification'></Alert>
      <Alert variant="error" subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit' title='Hey you gave a notification'></Alert>
      <Alert variant="success" subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit' title='Hey you gave a notification'></Alert>

      <h1>Avatar</h1>
      <Avatar src='https://zlinyan.es/_astro/me.C7wE-_Fh_1HxhPl.webp' />
      <h1>Autocomplete</h1>
      <Autocomplete
        id='autocomplete'
        label='Autocomplete example'
        listName='datalist'
        options={[
          "spain",
          "china",
          "canary islands",
          "portugal",
          "usa"
        ]}
      />

      <h1>Color Picker</h1>
      <ColorPicker id='color-picker'>Ejemplo de Color Picker</ColorPicker>
      <h1>Separator</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sit, aperiam modi deleniti sunt a exercitationem eaque quaerat laudantium error quam
        <Separator />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste tempore quidem ipsum veniam fugiat eum provident corrupti sapiente dolore
      </div>

      <div className='flex'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sit, aperiam modi deleniti sunt a exercitationem eaque quaerat laudantium error quam
        <Separator orientation='vertical' />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste tempore quidem ipsum veniam fugiat eum provident corrupti sapiente dolore
      </div>

      <h1>Links</h1>
      <Link href='#'>Enlace</Link>

      <h1>Inputs</h1>
      <div>
        <Input id='input'>Label</Input>
      </div>
      <div className='flex items-center'>
        <Check id='check'>Label for check</Check>
      </div>
      <div>
        <Textarea id='textarea'>Label for textarea</Textarea>
      </div>
      <h1>Progress Bar</h1>
      <div className='w-full'>
        <Progress max={100} value={25} min={0} status='error' />
        <Progress max={100} value={50} min={0} status='warning' />
        <Progress max={100} value={75} min={0} status='warning' />
        <Progress max={100} value={100} min={0} status='success' />
      </div>

      <ScrollArea className='flex flex-col w-1/2 max-h-24 overflow-auto '>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam animi facere at! Accusamus blanditiis unde veniam assumenda ut deleniti dolorum velit. Iure pariatur perferendis ullam quidem, neque soluta rerum!
      </ScrollArea>

      <h1>Slider</h1>
      <Slider />

      <h1>Snippet</h1>
      <Snippet>npm i @chinese/button</Snippet>
      
      <h1>Float Button</h1>
      <FloatButton>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
        </svg>
      </FloatButton>

      <h1>Pagination</h1>
      <div className='w-1/3'>
        <Pagination
          prevHref='#'
          nextHref='#'
        >
            <Link href="#" variant='ghost'>1</Link>
            <Link href="#" variant='ghost' active={true}>2</Link>
            <Link href="#" variant='ghost'>3</Link>
            <Link href="#" variant='ghost'>4</Link>
        </Pagination>
      </div>

    </main>
  )
}
