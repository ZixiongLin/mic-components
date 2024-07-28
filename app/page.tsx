import { Badge } from './components/Badge'
import { Check } from './components/Check'
import { Input } from './components/Input'
import { Link } from './components/Link'
import { Pill } from './components/Pill'
import { Progress } from './components/Progress'
import { ScrollArea } from './components/ScrollArea'
import { Separator } from './components/Separator'
import { Slider } from './components/Slider'
import { Textarea } from './components/Textarea'

export default function Home (): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#ffffff]'>
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
    </main>
  )
}
