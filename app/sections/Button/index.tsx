import { Button } from "@/app/components/Button";

export const Buttons = () => {
    return <>
        <h1>Buttons</h1>
        <h2>Solids</h2>
        <div className="">
            <Button size="lg" variant="solid">
                Continue
            </Button>
            <Button size="md" variant="solid">
                Continue
            </Button>
            <Button size="xs" variant="solid">
                Continue
            </Button>
        </div>
        <h2>Bordereds</h2>
        <div className="">
            <Button size="lg" variant="bordered">
                Continue
            </Button>
            <Button size="md" variant="bordered">
                Continue
            </Button>
            <Button size="xs" variant="bordered">
                Continue
            </Button>
        </div>
        <h2>Light</h2>
        <div className="">
            <Button size="lg" variant="light">
                Continue
            </Button>
            <Button size="md" variant="light">
                Continue
            </Button>
            <Button size="xs" variant="light">
                Continue
            </Button>
        </div>
        <h2>Flat</h2>
        <div className="">
            <Button size="lg" variant="flat">
                Continue
            </Button>
            <Button size="md" variant="flat">
                Continue
            </Button>
            <Button size="xs" variant="flat">
                Continue
            </Button>
        </div>
        <h2>Ghost</h2>
        <div className="">
            <Button size="lg" variant="ghost">
                Continue
            </Button>
            <Button size="md" variant="ghost">
                Continue
            </Button>
            <Button size="xs" variant="ghost">
                Continue
            </Button>
        </div>

    </>
}