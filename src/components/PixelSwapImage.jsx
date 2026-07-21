import { useMemo } from "react"

export const PixelSwapImage = ({ imageA, imageB, alt = "", size = 288, grid = 8 }) => {
    const tileSize = size / grid

    // random stagger order so tiles don't appear in a boring left-to-right sweep
    const delays = useMemo(() => {
        const order = Array.from({ length: grid * grid }, (_, i) => i)
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[order[i], order[j]] = [order[j], order[i]]
        }
        const delayMap = {}
        order.forEach((tileIndex, shuffledPos) => {
            delayMap[tileIndex] = shuffledPos * 12 // ms between each tile popping in
        })
        return delayMap
    }, [grid])

    return (
        <div
            className="group relative rounded-xl overflow-hidden"
            style={{ width: size, height: size }}
        >
            {/* base/default photo */}
            <img
                src={imageA}
                alt={alt}
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover select-none"
            />

            {/* tiled reveal photo */}
            <div className="absolute inset-0">
                {Array.from({ length: grid * grid }).map((_, i) => {
                    const row = Math.floor(i / grid)
                    const col = i % grid
                    return (
                        <div
                            key={i}
                            className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out"
                            style={{
                                width: tileSize,
                                height: tileSize,
                                top: row * tileSize,
                                left: col * tileSize,
                                backgroundImage: `url(${imageB})`,
                                backgroundSize: `${size}px ${size}px`,
                                backgroundPosition: `-${col * tileSize}px -${row * tileSize}px`,
                                transitionDelay: `${delays[i]}ms`,
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}