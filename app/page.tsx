import { Badge } from "./components/Badge";
import { Check } from "./components/Check";
import { Input } from "./components/Input";
import { Link } from "./components/Link";
import { Pill } from "./components/Pill";
import { Separator } from "./components/Separator";
import { Buttons } from "./sections/Button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Buttons />
      <h1>Badges</h1>
      <div>
        <Badge variant="success">Success</Badge>
        <Badge variant="removed">Removed</Badge>
        <Badge variant="progress">In Progress</Badge>
        <Badge variant="trial">Trial</Badge>
        <Badge variant="moved">Moved</Badge>
        <Badge variant="beta">Beta</Badge>
      </div>

      <h1>Pills</h1>
      <div>
        <Pill variant="success" value={0}/>
        <Pill variant="removed" value={10}/>
        <Pill variant="progress" value={15}/>
        <Pill variant="trial" value={5}/>
        <Pill variant="moved" value={20}/>
        <Pill variant="beta" value={2}/>
      </div>

      <h1>Separator</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sit, aperiam modi deleniti sunt a exercitationem eaque quaerat laudantium error quam
        <Separator/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste tempore quidem ipsum veniam fugiat eum provident corrupti sapiente dolore
      </div>

      <div className="flex">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sit, aperiam modi deleniti sunt a exercitationem eaque quaerat laudantium error quam
        <Separator orientation="vertical"/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste tempore quidem ipsum veniam fugiat eum provident corrupti sapiente dolore
      </div>

      <h1>Links</h1>
      <Link href="#">Enlace</Link>

      <h1>Inputs</h1>
      <div>
        <Input id="input">Label</Input>
      </div>
      <div className="flex items-center">
        <Check id="check">Label for check</Check>
      </div>
    </main>
  );
}
