import { useHover } from "@/context/HoverContext"

export default function FloatDescription () {
    const { hovered } = useHover();

    return (
        <div className="absolute left-28 bottom-20 hidden md:inline-block">
            <div className="h-6 border-l-2 border-black dark:border-neutral-200 dark:text-neutral-200 px-5">{hovered? hovered : ""}</div>
        </div>
    )
}