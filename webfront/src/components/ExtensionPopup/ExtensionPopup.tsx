import { useState } from "react";

export default function ExtensionPopup() {
    const popupButtonSize = 'w-15';

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div
            className="
                fixed bottom-0 right-0
                flex flex-col
                items-end
                gap-2
                p-3
            "
        >
            <div
                className={`
                    origin-bottom-right
                    min-w-30
                    min-h-50
                    bg-zinc-900

                    transition-all
                    duration-300

                    ${
                        isPopupOpen
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-100'
                    }
                `}
            />

            <button
                className={`
                    ${popupButtonSize}
                    rounded-full aspect-square
                    bg-zinc-900
                    cursor-pointer
                    active:scale-95
                    active:opacity-80
                    p-2
                    pr-3
                    flex items-center justify-center
                `}
                onClick={() => setIsPopupOpen(!isPopupOpen)}
            >
                <div
                    className={`
                        w-full
                        h-full
                        bg-zinc-600

                        [mask-image:url('./assets/CircuitPal.png')]
                        [mask-size:contain]
                        [mask-repeat:no-repeat]
                        [mask-position:center]
                    `}
                />
            </button>
        </div>
    );
}